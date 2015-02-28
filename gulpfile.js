var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    stylus = require('gulp-stylus');

gulp.task('stylus', function(){
	gulp.src('./src/stylus/**/*,styl')
	pipe.(stylus())
	pipe(gulp.dest('./dist/css'));
});

gulp.task('jpg', function(){
    gulp.src('/*.jpg')
    .pipe(changed('./dist/img'))
    .pipe(imagemin({
         progressive = true
     }))
     .pipe(gulp.dest('./dist/img'))
});


//gulp.task('default', ['one', 'compress', 'linenos', 'sourcemaps-inline', 'sourcemaps-external']);