var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    changed    = require('gulp-changed'),
    imagemin   = require('gulp-imagemin'),
    pngquant   = require('imagemin-optipng')
    less       = require('gulp-less'),
    concat     = require('gulp-concat'),
    minifyCss  = require('gulp-minify-css'),
    notify     = require('gulp-notify'),
    uglify     = require('gulp-uglify');

gulp.task('compile-less', function(){
    gulp.src('./src/assets/less/main.less')
    .pipe(changed('./dist/assets/css/*.{css}'))
    .pipe(less({
            compress: true
        }).on('error', gutil.log))
    .pipe(minifyCss({
            keepBreaks: false
        }
        ))
    .pipe(gulp.dest('.dist/assets/css/'))
    .pipe(notify("Less files compiled"));
});

gulp.task('compile-js', function(){
    gulp.src('./src/assets/js/*.js')
    .pipe(changed('./dist/assets/js/*.{js}'))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(notify(".js files compiled"));
});

gulp.task('compress-images', function(){
    return gulp.src('./src/assets/images/*.{png,jpg}')
    .pipe(changed('./dist/assets/images/'))
    .pipe(pngquant({optimizationLevel: 3})())
    .pipe(imagemin({
        progressive: true
    }))
    .pipe(gulp.dest('./dist/assets/images/'))
    .pipe(notify("Minified images"));
});

gulp.task('compile', [ 'compile-less', 'compile-js', 'compress-images' ] );