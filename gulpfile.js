var gulp = require('gulp'),
    clean = require('gulp-clean');

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

gulp.task('clean-bower', function(){
    return gulp.src('./src/components/')
    .pipe(clean({force: true}))
});

gulp.task('arrange-workflow', [ 'copy-less', 'copy-fonts', 'copy-js' ])

//gulp.task('default', ['one', 'compress', 'linenos', 'sourcemaps-inline', 'sourcemaps-external']);