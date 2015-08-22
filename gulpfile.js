var gulp       = require('gulp'),
    clean      = require('gulp-clean'),
    changed    = require('gulp-changed'),
    imagemin   = require('gulp-imagemin'),
    pngquant   = require('imagemin-optipng')
    less       = require('gulp-less'),
    concat     = require('gulp-concat'),
    sourceMaps = require('gulp-sourcemaps')
    minifyCss  = require('gulp-minify-css'),
    notify     = require('gulp-notify'),
    gutil      = require('gulp-util');

gulp.task('copy-less', function(){
    gulp.src('./src/components/bootstrap-less/less/**/*.less')
    .pipe(gulp.dest('src/bootstrap/less/'))
});

gulp.task('copy-fonts', function(){
    gulp.src('./src/components/bootstrap-less/fonts/*.{ttf,woff,eof,svg}')
    .pipe(gulp.dest('src/bootstrap/fonts/'))
});

gulp.task('copy-js', function(){
    gulp.src('./src/components/bootstrap-less/js/*.js')
    .pipe(gulp.dest('src/bootstrap/js/'))
});

gulp.task('compile-less', function(){
    gulp.src('path/to/main.less')
    .pipe(less({compress: true}).on('error', gutil.log))
    .pipe(minifyCss({keepBreaks: false}))
    .pipe(gulp.dest('dist'))
    .pipe(notify("Compiled and compressed and minified "));
});

gulp.task('uglify', function(){
    gulp.src('/folder/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('/path/'))
});

gulp.task('concat-and-minify-javascript', function(){
    return gulp.src(['file.js', 'file2,js', '.....'])
    .pipe(concat({path: 'scripts.js', stats: {mode: 0666}}))
    .pipe(gulp.dest('/dist/js/'));
});

gulp.task('generate-sourcemap', function(){
    return gulp.src('/src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('file.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('destination'));
});

gulp.task('clean', function(){
    return gulp.src('./src/components/')
    .pipe(clean({force: true}))
});

gulp.task('jpg', function(){
    gulp.src('./src/assets/images/*.{jpg}')
    .pipe(changed('./dist/assets/images/'))
    .pipe(imagemin({
        progressive: true
    }))
    .pipe(gulp.dest('./dist/assets/images/'))
});

gulp.task('png', function(){
    return gulp.src('./src/assets/images/*.{png}')
    .pipe(changed('./dist/assets/images/'))
    .pipe(pngquant({optimizationLevel: 3})())
    .pipe(gulp.dest('./dist/assets/images/'));
});


gulp.task('arrange-workflow', [ 'copy-less', 'copy-fonts', 'copy-js' ]);
gulp.task('compile-css-js', [ 'css', 'js' ] );
gulp.task('minify-images', [ 'jpg', 'png' ]);

//gulp.task('default', ['one', 'compress', 'linenos', 'sourcemaps-inline', 'sourcemaps-external']);
