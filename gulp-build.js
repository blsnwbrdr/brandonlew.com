// GULP
const gulp = require('gulp');

// MODULES
const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const jsMinify = require('gulp-uglify');
const cssMinify = require('gulp-cssmin');
const rename = require('gulp-rename');

// FILE LOCATIONS
const sourceDir = 'index-staging';
const destDir = 'index';

//----------
// TASKS
//----------

// PARSE HTML, MINIFY, AND COPY TO NEW LOCATION
gulp.task('html', () => {
  return gulp
    .src(`${sourceDir}.html`)
    .pipe(useref())
    .pipe(gulpif(['js/*.js', 'js/**/*.js'], jsMinify()))
    .pipe(gulpif('css/*.css', cssMinify()))
    .pipe(gulpif(`${sourceDir}.html`, rename(`${destDir}.html`)))
    .pipe(
      gulp.dest((file) => {
        return file.base;
      })
    );
});

// RUN TASKS
gulp.task(
  'default',
  gulp.series(['html'], (done) => {
    done();
  })
);
