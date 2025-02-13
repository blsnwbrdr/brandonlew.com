// GULP
import gulp from 'gulp';

// MODULES
import open from 'open';

//----------
// TASKS
//----------

// START PRODUCTION
gulp.task('prod', (done) => {
  open(`./index.html`, { app: { name: 'google chrome' } });

  done();
});

// START STAGING
gulp.task('stg', (done) => {
  open(`./index-staging.html`, { app: { name: 'google chrome' } });

  done();
});

// RUN TASKS
gulp.task(
  'default',
  gulp.series(['prod', 'stg'], (done) => {
    done();
  })
);
