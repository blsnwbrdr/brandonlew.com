// GULP
const gulp = require('gulp');

// MODULES
const sass = require('gulp-sass');
const cssMinifiy = require('gulp-cssmin');
const rename = require('gulp-rename');

// SOURCE DIRECTORY
const sourceDir = 'sass/';

// DESTINATION DIRECTORY
const destDir = 'css';

// COMPILE SASS
gulp.task('compile', () => {
  return gulp.src([`${sourceDir}*.{sass,scss}`])
    .pipe(sass({outputStyle:'compact'}).on('error', sass.logError))
    .pipe(gulp.dest(function (file) {
      return file.base;
    }));
});

// MINIFY CSS TO DESTINATION DIRECTORY
gulp.task('minify', () => {
  return gulp.src([`${sourceDir}*.css`,`!${sourceDir}*.min.css`])
    .pipe(cssMinifiy())
    .pipe(rename({
      dirname:'',
      extname:'.min.css'
    }))
    .pipe(gulp.dest(destDir))
});

gulp.task('sass:watch', () => {
  gulp.watch(`${sourceDir}*.{sass,scss}`, gulp.series(['compile','minify']), () => {});
});

gulp.task('default', gulp.series(['sass:watch'], () => {}));
