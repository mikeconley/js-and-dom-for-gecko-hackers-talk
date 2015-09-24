var gulp = require('gulp');
var rsync = require('gulp-rsync');
 
gulp.task('deploy', function() {
  gulp.src('./*')
    .pipe(rsync({
      root: '.',
      hostname: 'people.mozilla.org',
      username: 'mconley2',
      destination: '~/public_html/talks/js-and-dom-for-gecko-hackers-talk'
    }));
});
