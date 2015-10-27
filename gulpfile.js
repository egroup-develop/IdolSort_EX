var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browser = require('browser-sync');
var plumber = require('gulp-plumber');

gulp.task('default', ['server'], function(){
  gulp.watch(['./src/html/*', './src/js/*', './src/css/*', './src/imgs/*'], ['uglify']);
});

gulp.task('uglify', function(){
  gulp.src('./src/html/*')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/html'))
    .pipe(browser.reload({stream: true}));
  gulp.src(['./src/js/*', '!./src/js/angular.min.js'])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(browser.reload({stream: true}));
  gulp.src('./src/js/angular.min.js')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/js'))
    .pipe(browser.reload({stream: true}));
  gulp.src('./src/css/*')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browser.reload({stream: true}));
  gulp.src('./src/imgs/*')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/imgs'))
    .pipe(browser.reload({stream: true}));
});

gulp.task('server', function(){
  browser({
    server: {
      baseDir: "./dist/html/"
    }
  });
});
