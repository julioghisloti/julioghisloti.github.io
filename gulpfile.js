var gulp        = require('gulp');
var gutil       = require('gulp-util');
var stylus      = require('gulp-stylus');
var nib         = require('nib');
var jeet        = require('jeet');
var uglify      = require('gulp-uglify');
var plumber     = require('gulp-plumber');
var pngquant    = require('imagemin-pngquant');
var watch       = require('gulp-watch');
var concat      = require('gulp-concat');
var browserSync = require('browser-sync').create();

//compass error
var onError = function (err) {  
  gutil.beep();
  console.log(err);
};

// Static Server + watching stylus/html files
gulp.task('serve', ['stylus'], function() {

    browserSync.init({
       proxy: "localhost:1337/julioghisloti.github.io"
    });

    gulp.watch("src/styl/**/*.styl", ['stylus']);
    gulp.watch("src/js/**/*.js", ['scripts']);
    gulp.watch("*.html").on('change', browserSync.reload);

});

gulp.task('default', ['serve']);

//minificando js
gulp.task('scripts', function(){
    return gulp.src(['src/js/main.js'])
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream());
});

//stylus
gulp.task('stylus', function(){
    gulp.src('./src/styl/*.styl')
        .pipe(stylus({
            use: [nib(), jeet()],
            compress: true
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});