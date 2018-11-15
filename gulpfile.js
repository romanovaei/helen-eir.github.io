var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleancss = require('gulp-clean-css');
var browserSync = require('browser-sync');//.create(); // (автоматическое обновление)

gulp.task('less', function() {
  return gulp.src('app/less/**/*.less')
  .pipe(less())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browserSync ({  // Выполняем browser Sync
    server: {  // Определяем параметры сервера
      baseDir: 'app'  // выбрали папку, которая будет сервером; Директория для сервера - app
    },
    // notify: false   убрать уведомления в браузере
  });
});

gulp.task('watch', ['browser-sync', 'less'], function() {  // метод watch для проверки сохраняемости файлов; параметры в [] выполняются до watch
  gulp.watch('app/less/**/*.less', ['less']); // в [] массив тех task'ов, которые будем выполнять
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
