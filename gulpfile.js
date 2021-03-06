var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleancss = require('gulp-clean-css');
var browserSync = require('browser-sync');

gulp.task('less', function() {
  return gulp.src('app/less/**/*.less')
  .pipe(less())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browserSync ({  
    server: {  
      baseDir: 'app'  
    },
  });
});

gulp.task('watch', ['browser-sync', 'less'], function() {  
  gulp.watch('app/less/**/*.less', ['less']); 
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
