// jshint varstmt: false

var gulp = require('gulp');

var jsonschemaBundle = require('gulp-jsonschema-bundle');
var merge = require('merge-stream');

gulp.task('schemabundle', function() {

  var core = gulp.src(['schemas/json-schema/core/*.json'])
    .pipe(jsonschemaBundle())
    .pipe(gulp.dest('schemas/json-schema/core/bundled'));

  var dataObjects = gulp.src(['schemas/json-schema/data-objects/*.json'])
    .pipe(jsonschemaBundle())
    .pipe(gulp.dest('schemas/json-schema/data-objects/bundled'));

  return merge([core, dataObjects]);
});
