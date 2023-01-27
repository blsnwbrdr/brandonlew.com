// GULP
const gulp = require('gulp');

// MODULES
const sass = require('gulp-sass')(require('sass'));

// SOURCE DIRECTORY
const sourceDir = 'sass/';

// DESTINATION DIRECTORY
const destDir = 'css';

//----------
// TASKS
//----------

// COMPILE SASS
gulp.task('compile', () => {
  return gulp
    .src([`${sourceDir}*.{sass,scss}`])
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest(destDir));
});

// SASS WATCH
gulp.task('sass:watch', () => {
  gulp.watch(`${sourceDir}*.{sass,scss}`, gulp.series(['compile']), () => {});
});

// RUN TASKS
gulp.task(
  'default',
  gulp.series(['sass:watch'], () => {})
);
