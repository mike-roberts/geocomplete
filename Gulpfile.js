var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache');

gulp.task('scripts', function() {
  return gulp.src('jquery.geocomplete.js')
    .pipe(gulp.dest('./'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('./'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('watch', function() {
  gulp.watch('jquery.geocomplete.js', ['scripts']);
});

// Default task
gulp.task('default', function() {
    gulp.start('scripts');
});