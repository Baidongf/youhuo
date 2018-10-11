var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('js', function() {
    // 将你的默认的任务代码放在这
    gulp.src('./src/js/*.js').pipe(uglify()).pipe(rename({"suffix":".min"})).pipe(gulp.dest("./dist"));
});