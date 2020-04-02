var gulp        = require('gulp');
var gutil       = require('gulp-util');
//var uglify      = require('gulp-uglify');
let uglify      = require('gulp-uglify-es').default;
var plumber     = require('gulp-plumber');
var watch       = require('gulp-watch');
var browserSync = require('browser-sync').create();
var changed     = require('gulp-changed');
var sass        = require('gulp-sass');

//compass error
var onError = function (err) {  
  gutil.beep();
  console.log(err);
};

// Static Server + watching stylus/html files
gulp.task('server', ['sass'], function() {

    browserSync.init({
       proxy: "127.0.0.1:4000"
    });

    gulp.watch("_src/scss/**/*.scss", ['sass']);
    gulp.watch("_src/js/*.js", ['scripts']).on('change', browserSync.reload);
    gulp.watch("**/*.html").on('change', browserSync.reload);

}); 

//minificando js
gulp.task('scripts', function(){
    gulp.src('_src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function () {
  return gulp.src('_src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('build/css/'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['server']);