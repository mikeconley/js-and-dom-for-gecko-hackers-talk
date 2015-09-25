var gulp = require('gulp');
var rsync = require('gulp-rsync');

gulp.task('deploy', function() {
  return gulp.src(['{themes,extensions,core,examples}/**/*.{js,css}', 'index.html'])
             .pipe(rsync({
               root: '.',
               hostname: 'people.mozilla.org',
               username: 'mconley2',
               destination: '~/public_html/talks/js-and-dom-for-gecko-hackers-talk'
             }));
});
