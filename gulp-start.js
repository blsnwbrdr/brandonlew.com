// GULP
const gulp = require('gulp');

// MODULES
const open = require('gulp-open');

//----------
// TASKS
//----------

// START PRODUCTION
gulp.task('prod', (done) => {
  gulp.src('./index.html').pipe(
    open({
      app: 'google chrome',
    })
  );
  done();
});

// START STAGING
gulp.task('stg', (done) => {
  gulp.src('./index-staging.html').pipe(
    open({
      app: 'google chrome',
    })
  );
  done();
});

// RUN TASKS
gulp.task(
  'default',
  gulp.series(['prod', 'stg'], (done) => {
    done();
  })
);
