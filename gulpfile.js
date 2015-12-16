var gulp = require('gulp');
var exec = require('child_process').exec;

// Gulp task to generate development documentation;
gulp.task('doc', function(done) {

  console.log('Generating documentation...');
  exec('node_modules/.bin/jsdoc -R readme.md -d docs src/*', function(err, stdout, stderr) {
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

  var bundler = browserify('./src/service-framework.js', {
    standalone: 'service-framework', debug: false}).transform(babel);

  function rebundle() {
    return bundler.bundle()
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
  }

  return rebundle();

});

gulp.task('build', function() {

  var bundler = browserify('./src/service-framework.js', {
    standalone: 'service-framework',
    debug: true
  }).transform(babel);

  function rebundle() {
    return bundler.bundle()
      .on('error', function(err) {
        console.error(err);
        this.emit('end');
      })
      .pipe(source('service-framework.js'))
      .pipe(gulp.dest('./dist'));
  }

  return rebundle();

});

/**
 * Compile on specific file from ES6 to ES5
 * @param  {string} 'compile' task name
 *
 * How to use: gulp compile --file 'path/to/file';
 */
gulp.task('compile', function() {

  var filename = argv.file;
  var path;

  if (!filename) {
    this.emit('end');
  } else {
    var splitIndex = filename.lastIndexOf('/') + 1;
    path = filename.substr(0, splitIndex);
    filename = filename.substr(splitIndex).replace('.js', '');
  }

  console.log('Converting ' + filename + ' on ' + path + ' to ES5');

  var bundler = browserify(path + filename, {
    standalone: 'activate',
    debug: false
  }).transform(babel);

  function rebundle() {
    return bundler.bundle()
      .on('error', function(err) {
        console.error(err);
        this.emit('end');
      })
      .pipe(source(filename + '.ES5.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(path));
  }

  return rebundle();
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
