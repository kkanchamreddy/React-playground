var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
/*
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('default', function(){
  return gulp.src('src/**')
    .pipe(react())
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./'));
});
*/

gulp.task('default', function(){
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions:['.jsx'],
    debug: true,
    cache:{},
    packageCache: {},
    fullPaths: true
  }));

  function build(file){
    if(file){
      gutil.log('Recompile '+ file);
    }

    return bundler
          .bundle()
          .on('error', gutil.log.bind(gutil, 'Browserify Error'))
          .pipe(source('main.js'))
          .pipe(gulp.dest('./'));

  }

  build();
  bundler.on('update', build);
});
