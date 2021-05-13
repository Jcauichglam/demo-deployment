var cachebust = require('gulp-cache-bust');
 
gulp.src('./dist/deployment-angular/*.style')
    .pipe(cachebust({
        type: 'timestamp'
    }))
    .pipe(gulp.dest('./dist/deployment-angular'));