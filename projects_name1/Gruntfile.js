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
                    server: './app/'
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
        },
        // grunt-typescriptがtsconfigを読み込まずにコンパイルするため
        // jQueryなど外部ライブラリのコンパイルでエラーになる
        // たぶん解決できないので、Gulpに乗り換える
        typescript: {
            base: {
                src: ['src/scripts/**/*.ts'],
                dest: 'app/scripts',
                options: {
                    module: 'commonjs', 
                    target: 'es5', 
                    noImplicitAny: false,
                    // basePath: 'src/scripts',
                    sourceMap: false,
                    declaration: true
                }
            }
        },
    });

    // プラグインのロード
    grunt.loadNpmTasks('grunt-contrib-watch'); //watch
    grunt.loadNpmTasks('grunt-contrib-sass'); //sass
    grunt.loadNpmTasks('grunt-browser-sync'); //browser-sync
    grunt.loadNpmTasks('grunt-contrib-pug'); //pug
    grunt.loadNpmTasks('grunt-typescript'); //typescript

    // デフォルトタスクの設定
    grunt.registerTask('default', ['browserSync', 'watch']);
};