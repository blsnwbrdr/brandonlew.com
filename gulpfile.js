const gulp = require('gulp');

// MODULES
const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const jsMinify = require('gulp-uglify');
const cssMinify = require('gulp-cssmin');
const rename = require('gulp-rename');

//----------
// TASKS
//----------

// PARSE HTML, MINIFY, AND COPY TO NEW LOCATION
gulp.task('html', () => {
  return gulp.src('index-staging.html')
    .pipe(useref())
    .pipe(gulpif(['js/*.js','js/**/*.js'], jsMinify()))
    .pipe(gulpif('css/*.css', cssMinify()))
    .pipe(gulpif('index-staging.html', rename('index.html')))
    .pipe(gulp.dest( (file) => {
      return file.base
    }));
});

// RUN TASKS
gulp.task('default', gulp.series(['html'], (done) => {
  done();
}));
