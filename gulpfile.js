var gulp = require('gulp');
var uglifyCss = require('gulp-uglifycss');

var css = {
	files: ['css/reset.css', 'css/style.css', 'css/custom.css']
};

gulp.task('cssmin', function(){
	return gulp.src(css.files)
		.pipe(uglifyCss())
		.pipe(gulp.dest('stylesheet/'));
});