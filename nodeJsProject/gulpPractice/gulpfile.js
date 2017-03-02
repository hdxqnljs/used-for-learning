var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function() {
	return gulp.src('./source/css/**/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('./static/css/'));
});

gulp.task('sass:watch',function() {
	gulp.watch('./source/css/**/*.scss',['sass']);
});

gulp.task('default',['sass:watch']);