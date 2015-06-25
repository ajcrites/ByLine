var gulp = require("gulp"),
    babel = require("gulp-babel"),
    rename = require("gulp-rename");

gulp.task("default", ["transpile"]);

gulp.task("transpile", function () {
    gulp
        .src(["**/*.es7"])
        .pipe(babel({
            stage: 0,
        }))
        .pipe(rename(function (path) {
            path.extname = ".js";
        }))
        .pipe(gulp.dest("."));
});
