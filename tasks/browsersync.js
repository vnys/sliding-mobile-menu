var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: ['app']
    }
  });

    gulp.watch(['app/less/*.less'], ['less']);

});
