/**
*
* FireStarter - Styles Task
*
**/

var config = require('../config');

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    postcss      = require('gulp-postcss'),
    csso         = require('postcss-csso'),
    autoprefixer = require('autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    rename       = require('gulp-rename');

gulp.task('styles', function() {
    return gulp.src(config.paths.dev.styles + '/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer(config.tasks.styles.postcss.autoprefixer) ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.build.css));
});

gulp.task('styles:build', ['styles'], function() {
    return gulp.src(config.paths.build.css + '/*.css')
        .pipe(postcss([
            csso(config.tasks.styles.postcss.csso)
        ]))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(config.paths.build.css));
});
