
const gulp = require('gulp');
const zip = require('gulp-zip');
const tap = require('gulp-tap')
exports.default = () => {
    return gulp.src(['build/*']).pipe(
        tap(function (file) {
            const folderName = file.path.substr(file.path.lastIndexOf('/') + 1)
            const fileName = './build/' + folderName + '/**'
            gulp
                .src(fileName)
                .pipe(zip(folderName + '.zip'))
                .pipe(gulp.dest('./build'))
        })
    )
};