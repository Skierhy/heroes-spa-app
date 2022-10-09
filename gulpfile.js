import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

export default () =>
	gulp
		.src('./images/heroes/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/images/heroes'));
