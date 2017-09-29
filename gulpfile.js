var gulp = require('gulp');

// MODULES
var jsMinify = require('gulp-uglify');
var cssMinify = require('gulp-cssmin');
var rename = require('gulp-rename');

// LOCATION VARIABLES
var srcDir = '';
var newDir = '';

//----------
// TASKS
//----------

// MINIFY JAVASCRIPT FILES
gulp.task('js', function() {
  return gulp.src(['' + srcDir + 'js/*.js','!' + srcDir + 'js/*.min.js'])
    .pipe(jsMinify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('' + srcDir + 'js/'));
});

// MINFIY CSS FILES
gulp.task('css', function() {
  return gulp.src(['' + srcDir + 'css/*.css','!' + srcDir + 'css/*.min.css'])
    .pipe(cssMinify())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('' + srcDir + 'css/'));
});

// RUN MINIFY TASKS
gulp.task('default', ['js','css'], function() {});