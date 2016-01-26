// jshint varstmt: false

var gulp = require('gulp');
var exec = require('child_process').exec;
var prompt = require('gulp-prompt');

// Gulp task to generate development documentation;
gulp.task('doc', function(done) {

  console.log('Generating documentation...');
  exec('node_modules/.bin/jsdoc -R readme.md -d docs src/*', function(err) {
    if (err) return done(err);
    console.log('Documentation generated in "docs" directory');
    done();
  });

});

// Task and dependencies to distribute for all environments;
var babel = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var replace = require('gulp-replace');
var insert = require('gulp-insert');
var uglify = require('gulp-uglify');
var bump = require('gulp-bump');
var argv = require('yargs').argv;

var pkg = require('./package.json');

gulp.task('dist', function() {

  return browserify('./src/service-framework.js', {
    standalone: 'service-framework', debug: false}
  ).transform(babel)
  .bundle()
  .on('error', function(err) {
    console.error(err);
    this.emit('end');
  })
  .pipe(source('service-framework.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(insert.prepend('// Service Framework \n\n// version: {{version}}\n\n'))
  .pipe(replace('{{version}}', pkg.version))
  .pipe(gulp.dest('./dist'));

});

gulp.task('build', function() {

  return browserify('./src/service-framework.js', {
    standalone: 'service-framework',
    debug: true
  }).transform(babel)
  .bundle()
  .on('error', function(err) {
    console.error(err);
    this.emit('end');
  })
  .pipe(source('service-framework.js'))
  .pipe(gulp.dest('./dist'));

});

/**
* Compile on specific file from ES6 to ES5
* @param  {string} 'compile' task name
*
* How to use: gulp compile --file 'path/to/file';
*/
function compile(file, destination, cb) {

  var filename = file;
  var path = destination;

  if (!filename) {
    cb(new Error('No such file or directory'));
  }

  var splitIndex = filename.lastIndexOf('/') + 1;
  var name = filename.substr(splitIndex).replace('.js', '');

  console.log('Converting ' + filename + ' on ' + path + ' to ES5');

  return browserify({
    entries: [filename],
    standalone: 'activate',
    debug: false
  }).transform(babel)
  .bundle()
  .on('error', function(err) {
    console.error(err);
  })
  .pipe(source(name + '.js'))
  .pipe(gulp.dest(path))
  .pipe(buffer())
  .pipe(encode(name, 'Hyperties'))
  .pipe(source('Hyperties.json'))
  .pipe(gulp.dest('resources/descriptors/'))
  .on('end', function() {
    console.log('File converted');
  });

}

gulp.task('watch-hyperty', function(cb) {

  var destination = argv.dest;

  gulp.watch(['src/hyperty/*.js'], function(event) {
    return compile('src/hyperty/HypertyConnector.js', destination, cb);
  });

});

gulp.task('watch', function(cb) {
  gulp.watch(['src/**/*.js'], ['dist'], cb);
});

var through = require('through2');
var Base64 = require('js-base64').Base64;
var fs = require('fs');

function encode(filename, descriptorName, configuration, isDefault) {

  var descriptor = fs.readFileSync('resources/descriptors/' + descriptorName + '.json', 'utf8');
  var json = JSON.parse(descriptor);

  return through.obj(function(file, enc, cb) {

    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      return cb(new Error('Streaming not supported'));
    }

    var encoded = Base64.encode(file.contents);
    var value = 'default';

    if (isDefault) {
      if (json.hasOwnProperty(filename)) {
        value = filename;
      }
    } else {
      var newObject;
      if (json.hasOwnProperty('default')) {
        newObject = JSON.parse(JSON.stringify(json['default']));
      } else if (json.hasOwnProperty('HelloHyperty')) {
        newObject = JSON.parse(JSON.stringify(json.HelloHyperty));
      }

      json[filename] = newObject;
      value = filename;
    }

    json[value].objectName = filename;
    json[value].configuration = configuration;
    json[value].sourcePackage.sourceCode = encoded;
    json[value].sourcePackage.sourceCodeClassname = filename;
    json[value].sourcePackage.encoding = 'Base64';
    json[value].sourcePackage.signature = '';

    var newDescriptor = new Buffer(JSON.stringify(json, null));
    cb(null, newDescriptor);

  });

}

function resource(file, configuration, isDefault) {

  var filename = file;
  var splitIndex = filename.lastIndexOf('/') + 1;
  filename = filename.substr(splitIndex).replace('.js', '');

  var descriptorName = 'Hyperties';
  if (filename.indexOf('Hyperty') === -1) {
    descriptorName = 'ProtoStubs';
  }

  return browserify({
    entries: ['resources/' + filename + '.js'],
    standalone: 'activate',
    debug: false
  })
  .transform(babel)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('resources/'))
  .pipe(buffer())
  .pipe(encode(filename, descriptorName, configuration, isDefault))
  .pipe(source(descriptorName + '.json'))
  .pipe(gulp.dest('resources/descriptors/'));

}

gulp.task('encode', function(done) {

  gulp.src('./', {buffer:false})
    .pipe(prompt.prompt([{
      type: 'input',
      name: 'file',
      message: 'File to be converted?'
    },
    {
      type: 'input',
      name: 'configuration',
      message: 'Configuration file like an object or url to ProtoStub have on configuration'
    },
    {
      type: 'radio',
      name: 'defaultFile',
      message: 'This will be a default file to be loaded? (yes/no)',
      choices: ['yes', 'no']
    }], function(res) {

      fs.access(res.file, fs.R_OK | fs.W_OK, function(err) {
        if (err) done(new Error('No such file or directory'));
        return;
      });

      var configuration;
      if (typeof res.configuration === 'object') {
        configuration = res.configuration;
      } else if (typeof res.configuration === 'string') {
        configuration = {};
        configuration.url = res.configuration;
      }

      var isDefault = true;
      if (res.defaultFile === 'no') {
        isDefault = false;
      }

      if (res.file) {
        resource(res.file, configuration, isDefault);
      }
    })
  );

});

/**
* Bumping version number and tagging the repository with it.
* Please read http://semver.org/
*
* You can use the commands
*
*     gulp patch     # makes v0.1.0 → v0.1.1
*     gulp feature   # makes v0.1.1 → v0.2.0
*     gulp release   # makes v0.2.1 → v1.0.0
*
* To bump the version numbers accordingly after you did a patch,
* introduced a feature or made a backwards-incompatible release.
*/
function inc(importance) {
  // get all the files to bump version in
  return gulp.src(['./package.json'])

  // bump the version number in those files
  .pipe(bump({type: importance}))

  // save it back to filesystem
  .pipe(gulp.dest('./'));
}

gulp.task('patch', ['test'], function() { return inc('patch'); });

gulp.task('feature', ['test'], function() {  return inc('minor'); });

gulp.task('release', ['test'], function() {  return inc('major'); });

var Server = require('karma').Server;

/**
* Run test once and exit
*/
gulp.task('test', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
