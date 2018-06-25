var gulp = require("gulp"),
    fs = require("fs"),
    sass = require("gulp-sass");

// other content removed

gulp.task("sass", function () {
    return gulp.src('Styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('wwwroot/css'));
});

gulp.task('watch', function () {
    gulp.watch('Styles/*.scss', ['sass']);
    // Other watchers
})