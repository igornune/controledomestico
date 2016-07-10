module.exports = function (gulp, $) {
  'use strict';

  var scripts = [
    'resources/assets/js/vendor/**/*.js',
    'resources/assets/js/app/**/*.js'
  ];

  gulp.task('watch', function () {
    gulp.watch(scripts, ['scripts']);
    gulp.watch([
      'resources/assets/less/**/*.less',
      'resources/assets/less/vendor/**/*.css'
    ], ['less']);
    gulp.watch('gulp/**/*.js', ['default']);
  });

};
