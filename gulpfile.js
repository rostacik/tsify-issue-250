var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');

gulp.task('mymodule', function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/mymodule.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('mymodule.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/consumer.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('consumer.js'))
    .pipe(gulp.dest('dist'));
});