module.exports = (grunt) => {
    grunt.initConfig({
        // watch
        watch: {
            files: 'src/scss/**/*.scss',
            tasks: ['sass']
        },
        // sassのコンパイル
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none',
                    noCache: true
                },
                files: {
                    "dist/css/main.css": "src/scss/main.scss"
                }
            }
        },
        // browserSync
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'dist/css/main.css',
                        'index.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        // pugのコンパイル
        pug: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: {
                    cwd: 'src/',
                    src:['**/*.pug','!**/_*.pug'],
                    dest: 'dist/html/',
                    ext: '.html'
                }
            }
        }
    });

    // プラグインのロード
    grunt.loadNpmTasks('grunt-contrib-watch'); //watch
    grunt.loadNpmTasks('grunt-contrib-sass'); //sass
    grunt.loadNpmTasks('grunt-browser-sync'); //browser-sync
    grunt.loadNpmTasks('grunt-contrib-pug');

    // デフォルトタスクの設定
    grunt.registerTask('default', ['browserSync', 'watch']);
};