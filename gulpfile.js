var gulp = require("gulp");
  var sass = require("gulp-sass");
  gulp.task("sass", function () {
    gulp.src("css/style.scss")
      .pipe(sass())
      .pipe(gulp.dest("css"));

 return gulp.src('./sass/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});
