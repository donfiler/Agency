###安装
npm install gulp-mcss

###使用文档

gulfile.js 编写示例
```js
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

```


