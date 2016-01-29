'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

// Process SCSS
gulp.task('sass', function () {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

// Watch for file changes
gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'sass']);
