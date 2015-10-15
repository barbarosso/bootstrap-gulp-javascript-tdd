var gulp    = require('gulp'),
    path    = require('path'),
    gutil   = require('gulp-util'),
    bundle  = require('../util/bundle');


gulp.task('watch', function () {
    gulp.watch([paths.scripts], ['jshint'])
        .on('change', logChanges);

    gulp.watch([paths.scripts], ['build'])
        .on('change', logChanges);

    gulp.watch([paths.testScripts], ['test'])
        .on('change', logChanges);

    return bundle.watch();
});

function logChanges(event) {
    gutil.log(
        gutil.colors.green('File ' + event.type + ': ') +
        gutil.colors.magenta(path.basename(event.path))
    );
}
