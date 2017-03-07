'use strict';

// 共通定義
const gulp = require('gulp');
const plumber = require('gulp-plumber');

// pug関連
const pug = require('gulp-pug');

// typescript関連
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

// css関連
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

// browser-sync
const browserSync = require('browser-sync').create();

// パスの整理
const pugPath = 'views';
const tsPath = 'scripts';
const sassPath = 'stylesheets';

// pugコンパイル
gulp.task('pug', () => {
  gulp.src([`src/${pugPath}/**/*.pug`, `!src/${pugPath}/**/_*.pug`])
    .pipe(plumber())
    .pipe(pug({
      pretty: true,
    }))
    .pipe(gulp.dest('dist/'));
});

// sassコンパイル
gulp.task('sass', () => {
  gulp.src(`src/${sassPath}/**/*.scss`)
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest(`dist/${sassPath}`));
});

// tyupescriptコンパイル
gulp.task("typescript", () => {
  return tsProject.src()
    .pipe(plumber())
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist/scripts/"));
});

//ブラウザリロード
gulp.task('bs-reload', () => {
  browserSync.reload();
});

// サーバー起動
gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: "", //対象ディレクトリ
      index: "index.html" //インデックスファイル
    },
    open: false
  });
});

gulp.task('init', ['pug','sass','typescript']);

// 初期起動はこっち
gulp.task('default', ['init','serve'], () => {

  gulp.watch('src/views/**/*.pug', ['pug']);
  gulp.watch('src/stylesheets/**/*.scss', ['sass']);
  gulp.watch('src/scripts/**/*.ts', ['typescript']);

  gulp.watch('dist/*.html', ['bs-reload']);
  gulp.watch('dist/stylesheets/*.css', ['bs-reload']);
  gulp.watch('dist/scripts/*.js', ['bs-reload']);
});