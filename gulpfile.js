var gulp = require('gulp');
var del = require('del');
const { src } = require('gulp');

function defaultTask(cb) {
  // place code for your default task here
  
  del([
        'src/*.js',
        'src/*/*.js'
      ]);
  src(['./src/Views/**/*']).pipe(gulp.dest('./build/Views'));
  src(['./src/Temp/**/*']).pipe(gulp.dest('./build/Temp'));
  cb();
}
exports.default = defaultTask





