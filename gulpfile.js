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