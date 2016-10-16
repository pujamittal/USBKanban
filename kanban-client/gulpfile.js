var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    return browserify('./src/app/app.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/'));
});

var browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./public",
            // The key is the url to match
            // The value is which folder to serve (relative to your current working directory)
            routes: {
                "/bower_components": "bower_components",
                "/node_modules": "node_modules"
            }
        },
        browser:"firefox"
    });
});
