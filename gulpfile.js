var gulp      = require('gulp');
var gutil     = require('gulp-util');
var stylus    = require('gulp-stylus');
var nib       = require('nib');
var jeet      = require('jeet');
var uglify    = require('gulp-uglify');
var plumber   = require('gulp-plumber');
var watch     = require('gulp-watch');

//compass error
var onError = function (err) {  
  gutil.beep();
  console.log(err);
};

//minificando js
gulp.task('scripts', function(){
    return gulp  
        .src(['src/js/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'));
});

//stylus
gulp.task('stylus', function(){
    gulp.src('./src/styl/*.styl')
        .pipe(stylus({
            use: [nib(), jeet()],
            compress: true
        }))
        .pipe(gulp.dest('build/css/'));
});


//watch
gulp.task('watch', function(){


    //Scripts
    gulp.watch('src/js/**/*.js', function(event) {
        gutil.log('Minificando seu JS ......');
        gulp.run('scripts');
    });

    //Compass
    gulp.watch('src/styl/**/*.styl', function(event) {
        gutil.log('Compilando o seu Stylus ......');
        gulp.run('stylus');
    });


});