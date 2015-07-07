var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var paths = {
  scripts: [
    'public/javascripts/src/*.js',
    'public/javascripts/src/**/*.js'
  ]
};

gulp.task("scripts", function () {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(babel())
    .pipe(sourcemaps.write("public/javascripts/."))
    .pipe(gulp.dest("public/javascripts/dist"));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);
