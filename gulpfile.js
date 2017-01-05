//'use strict';

var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass   = require('gulp-sass');

gulp.task('styles', function () {
  return gulp.src('./assets/scss/onivo.scss')
    .pipe(sass({
        outputStyle : 'compressed',
        includePaths : [
            './bower_components/bootstrap-sass/assets/stylesheets'
        ]
    }))
    .pipe(concat('onivo.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
    return gulp.src([
        './bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
        './assets/js/app.js',
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

gulp.task('watch', function () {
    gulp.watch('./assets/scss/**/*.scss', ['styles']);
    gulp.watch('./assets/js/**/*.js', ['scripts']);
});

gulp.task('default', ['styles','scripts','watch']);
