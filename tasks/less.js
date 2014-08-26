var gulp = require('gulp');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var reload = require('browser-sync').reload;

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('less', function() {
    gulp.src('./app/less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(prefix(AUTOPREFIXER_BROWSERS))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./app/css'))
        .pipe(reload({stream:true}));

});
