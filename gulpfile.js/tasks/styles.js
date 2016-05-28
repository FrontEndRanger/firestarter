/**
*
* FireStarter - Styles Task
*
**/

var config = require('../config');

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    cssnano      = require('gulp-cssnano'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps');

gulp.task('styles', function () {
    return gulp.src(config.paths.dev.styles + '/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer(config.tasks.styles.postcss.autoprefixer) ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.build.css));
});
