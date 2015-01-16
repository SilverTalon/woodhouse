var gulp = require('gulp');
var coveralls = require('gulp-coveralls');

gulp.task('coveralls', function() {
  gulp.src('coverage/**/lcov.info')
    .pipe(coveralls());
});
