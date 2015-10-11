var gulp  = require('gulp'),
    watch = require('gulp-watch'),
    sass  = require('gulp-sass'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    notify = require('gulp-notify');
    
var bases = {
    app: "app/",
    dist: "dist/"
};

var path = {
    images: "app/static/images/",
    fonts: "app/static/fonts/bootstrap/",
    scss: "app/static/styles/vendor/scss/",
    js: "app/static/scripts/vendor"
};

var srcPath = {
    fonts: "app/frontend/libs/bootstrap-sass/assets/fonts/bootstrap/*.*",
    scss: "app/frontend/libs/bootstrap-sass/assets/stylesheets/**/*.*",
    js:  ["app/frontend/libs/bootstrap-sass/assets/javascripts/**/*.*",
          "app/frontend/libs/jquery/dist/*.*"]
};

var distPath = {
    images: "dist/images/",
    css: "dist/css/",
    js: "dist/js/"
};

gulp.task('clean', function(){
    return gulp.src(bases.dist)
    .pipe(clean());
});

gulp.task('make', function(){
    gulp.src(srcPath.fonts)
    // .pipe(watch('app/frontend/libs/bootstrap-sass/assets/fonts/bootstrap/*.*'))
    .pipe(gulp.dest(path.fonts));

    gulp.src(srcPath.js)
    // .pipe(watch('app/frontend/libs/bootstrap-sass/assets/javascripts/**/*.*'))
    .pipe(gulp.dest(path.js));

    gulp.src(srcPath.scss)
    // .pipe(watch('app/frontend/libs/bootstrap-sass/assets/stylesheets/**/*.*'))
    .pipe(gulp.dest(path.scss));
});

gulp.task('sass', function(){
    gulp.src("app/static/styles/scss")
});