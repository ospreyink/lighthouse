var autoprefixer = require('autoprefixer'),
		cssvars = require('postcss-simple-vars'),		
		gulp = require('gulp'),
		postcss = require('gulp-postcss'),
		watch = require('gulp-watch'),
		nested = require('postcss-nested'),
		cssImport = require('postcss-import');

gulp.task('default', function(){
	console.log("ooooh yeah!!!");
});

gulp.task('html', function(){
	console.log('html task');
});

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
	
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});