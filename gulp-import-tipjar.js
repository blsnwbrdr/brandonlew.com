// GULP
const gulp = require('gulp');

// MODULES
const clean = require('gulp-clean');

// FILE LOCATIONS
const build = '../tipjar-react-app/build/**/*';
const portfolio = 'portfolio/tipjar/';

//----------
// TASKS
//----------

// DELETE PORTFOLIO DIRECTORY
gulp.task('delete', () => {
  return gulp.src([portfolio], { force: true, read: false }).pipe(clean());
});

// COPY BUILD FILES TO PORTFOLIO DIRECTORY
gulp.task('move', () => {
  return gulp.src([build]).pipe(gulp.dest(portfolio));
});

gulp.task('default', gulp.series(['delete', 'move']), function () {});
