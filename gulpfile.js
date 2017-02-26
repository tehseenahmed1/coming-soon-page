// Include modules
var gulp = require('gulp'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
	connect = require('gulp-connect'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minify = require('gulp-minify'),
	livereload = require('gulp-livereload');

var onError = function (err) {  
  console.log(err);
};


// Compile Scss
gulp.task('styles', function(){
	gulp.src('app/assets/scss/**/*.scss')
		.pipe(plumber({
	      errorHandler: onError
	    }))
		.pipe(sass({outputStyle: 'nested'}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('app/assets/styles/'))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('dist/assets/styles/'))
		.pipe(livereload());
});

// Compile JS
//gulp.task('scripts', function(){
//	gulp.src('app/assets/scripts/**/*.js')
//		.pipe(minify())
//		.pipe(gulp.dest('dist/assets/scripts/'))
//		.pipe(livereload());
//});

// Compile HTML
gulp.task('html', function(){
	gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulp.dest('dist/'))
		.pipe(livereload());
});

// add fonts in dist
gulp.task('fonts', function() {
  return gulp.src('app/assets/fonts/**/*')
  .pipe(gulp.dest('dist/assets/fonts'))
})

// WebServer
gulp.task('webserver', function() {
  connect.server({
  	root: 'dist',
  	livereload: true
  });
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('app/assets/scss/**/*.scss' , ['styles']);
	//gulp.watch('app/assets/scripts/**/*.js' , ['scripts']);
	gulp.watch('app/assets/fonts/**/*' , ['fonts']);
	gulp.watch('app/*.html', ['html']);
});

gulp.task('default', ['styles', 'fonts', 'html', 'watch', 'webserver']);