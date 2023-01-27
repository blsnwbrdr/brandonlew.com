// GULP
const gulp = require('gulp');

// MODULES
const del = require('del');

// FILE LOCATIONS
const build = '../tipjar-react-app/build/**/*';
const portfolio = '../brandonlew.com/portfolio/tipjar/';

//----------
// TASKS
//----------

// DELETE PORTFOLIO
gulp.task('delete', () => {
	return del([portfolio], {force: true});
});

// COPY BUILD FILES TO PORTFOLIO
gulp.task('move', () => {
	return gulp.src([build])
		.pipe(gulp.dest(portfolio));
});

gulp.task('default', gulp.series(['delete','move']), function() {});
