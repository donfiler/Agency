var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
var gulp = require('gulp');
var mcss = require('gulp-mcss');
var src = './src';
var desc = './build';
 
gulp.task('mcss', ['kmc'], function() {
   gulp.src(src+'/**/*.css')
        .pipe(mcss({
          src: '-debug.css'
        }))
        .pipe(gulp.dest(dest));
});


})
var gulp = require('gulp');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
 
gulp.task('default', function () {
    gulp.src('src/**/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});