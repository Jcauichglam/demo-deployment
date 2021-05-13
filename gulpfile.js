var cachebust = require('gulp-cache-bust');
 
gulp.src('./dist/*/*.html')
    .pipe(cachebust({
        type: 'timestamp'
    }))
    .pipe(gulp.dest('./dist/deployment-angular'));