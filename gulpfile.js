const { src, dest } = require("gulp"),
                gulp = require('gulp'),
                scss = require('gulp-sass'),
                autoprefixer = require('gulp-autoprefixer'),
                cssMini = require('gulp-clean-css'),
                rename = require('gulp-rename'),
                plumber = require('gulp-plumber'),
                dele = require('del'),
                uglify = require('gulp-uglify-es').default,
                rigger = require('gulp-rigger'),
                imagemin = require('gulp-imagemin'),
                webp = require('gulp-webp'),
                webpHTML = require('gulp-webp-in-html'),
                webpCSS = require('gulp-webp-css'),
                beautify = require('gulp-cssbeautify'),
                fonter = require('gulp-fonter'),
                ttf2woff = require('gulp-ttf2woff'),
                ttf2woff2 = require('gulp-ttf2woff2'),
                panini = require('panini'),
                browsersync = require('browser-sync').create();

const sourceFolder = "#src";
const projectFolder = "project";


 function html() {
     panini.refresh();
   return src(sourceFolder + '/*.html')
    .pipe(plumber())
    .pipe(webpHTML())
    .pipe(panini({
        root: sourceFolder,
        layouts: sourceFolder + '/templates/layouts/',
        partials: sourceFolder + '/templates/partials/',
        data: sourceFolder + '/templates/data/'
    }))
    .pipe(dest(projectFolder + '/'))
    .pipe(browsersync.stream());
}
 function css() {
    return src(sourceFolder + '/assets/style/scss/style.scss')
      .pipe(plumber())
      .pipe(scss())
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 5 versions']
      }))
      .pipe(beautify())
      .pipe(webpCSS())
      .pipe(dest(projectFolder + '/assets/style/'))
      .pipe(cssMini())
      .pipe(rename({
          extname: '.min.css'
      }))
      .pipe(dest(projectFolder + '/assets/style/'))
      .pipe(browsersync.stream());
}

function js() {
    return src(sourceFolder + '/assets/js/main.js')
    .pipe(plumber())
    .pipe(rigger())
    .pipe(dest(projectFolder + '/assets/js'))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(dest(projectFolder + '/assets/js'))
    .pipe(browsersync.stream());
}


function img() {
    return src(sourceFolder + '/assets/images/**/*.{jpg,png,svg,gif,ico,webmanifest,xml}')
    .pipe(webp({
        quality: 90
    }))
    .pipe(dest(projectFolder + '/assets/images/'))
    .pipe(src(sourceFolder + '/assets/images/**/*.{jpg,png,svg,gif,ico,webmanifest,xml}'))
    .pipe(imagemin({
        optimizationLevel: 2,
    }))
    .pipe(dest(projectFolder + '/assets/images/'))
    .pipe(browsersync.stream());
}

function fonts() {
     src(sourceFolder + '/assets/fonts/*.ttf')
    .pipe(dest(projectFolder + '/assets/fonts/'))
    .pipe(ttf2woff())
    .pipe(dest(projectFolder + '/assets/fonts/'))
    return src(sourceFolder + '/assets/fonts/*.ttf')
    .pipe(ttf2woff2())
    .pipe(dest(projectFolder + '/assets/fonts/'))
}

gulp.task('otf', function() {
    return src(sourceFolder + '/assets/fonts/*.otf')
    .pipe(fonter({
            formats: ['ttf']
    }))
    .pipe(gulp.dest(sourceFolder + '/assets/fonts/'))
})

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './' + projectFolder + '/'
        },
        port: 3000,
    })
}

function clean() {
    return dele('./' + projectFolder + '/')
}

function callbackError(cb) {
  cb(new Error('Nic nie lezy tutaj'));
}

function watchFiles() {
    gulp.watch([sourceFolder + '/**/*.html'], html)
    gulp.watch([sourceFolder + '/assets/style/**/*.scss'], css)
    gulp.watch([sourceFolder + '/assets/js/**/*.js'], js)
    gulp.watch([sourceFolder + '/assets/images/**/*.{jpg, svg, png, gif, ico, webmanifest, xml}'])
    gulp.watch([sourceFolder + '/assets/fonts/*'], fonts)
}

let build = gulp.series(clean, gulp.parallel(html, css, js, img, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync)

exports.html = html;
exports.css = css;
exports.js = js;
exports.fonts = fonts;
exports.img = img;
exports.build = build;
exports.default = watch;
exports.watch = watch;


