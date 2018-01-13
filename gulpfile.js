var gulp = require('gulp');

// MODULES
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var jsMinify = require('gulp-uglify');
var cssMinify = require('gulp-cssmin');
var rename = require('gulp-rename');

// LOCATION VARIABLES
// var srcDir = '';
// var newDir = '';

//----------
// TASKS
//----------

// PARSE HTML, MINIFY, AND COPY TO NEW LOCATION
gulp.task('html', function() {
  return gulp.src('index-staging.html')
    .pipe(useref())
    .pipe(gulpif(['js/*.js','js/**/*.js'], jsMinify()))
    .pipe(gulpif('css/*.css', cssMinify()))
    .pipe(gulpif('index-staging.html', rename('index.html')))
    .pipe(gulp.dest(''));
});

// // MINIFY JAVASCRIPT FILES
// gulp.task('js', function() {
//   return gulp.src(['' + srcDir + 'js/*.js','!' + srcDir + 'js/*.min.js'])
//     .pipe(jsMinify())
//     .pipe(rename({ extname: '.min.js' }))
//     .pipe(gulp.dest('' + srcDir + 'js/'));
// });
//
// // MINFIY CSS FILES
// gulp.task('css', function() {
//   return gulp.src(['' + srcDir + 'css/*.css','!' + srcDir + 'css/*.min.css'])
//     .pipe(cssMinify())
//     .pipe(rename({ extname: '.min.css' }))
//     .pipe(gulp.dest('' + srcDir + 'css/'));
// });

// RUN MINIFY TASKS
gulp.task('default', ['html'], function() {});
