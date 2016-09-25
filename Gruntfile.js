// Gruntfile.js

module.exports = function(grunt) {
    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({
        // setting CSS base path
        cssBasePath:'assets',
        // get the configuration info from package.json ----------------------------
        pkg: grunt.file.readJSON('package.json'),
        // configure uglify to minify js files -------------------------------------
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd - hh:mm:ss TT") %> \n*/\n'
            },
            default: {
                files: {
                    'dist/js/app.min.js':['app/*.module.js',
                        'app/!(*.module).js',
                        'app/components/**/*.module.js',
                        'app/components/**/!(*.module).js']
                }
            }
        },
        // configure less to compile .less to CSS files -------------------------------------
        less: {
            default: {
                options: {
                    path: "<%= cssBasePath %>/less/*.less",
                    banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd - hh:mm:ss TT") %> \n*/\n'
                },
                files: {"<%= cssBasePath %>/css/app.css": "<%= less.default.options.path %>"}
            }
        },
        // configure cssmin to minify CSS -------------------------------------
        cssmin: {
                css: {
                    src: '<%= cssBasePath %>/css/app.css',
                    dest: 'dist/css/app.min.css'
                }
        },
        // configure watch to perform necessary tasks -------------------------------------
        watch: {
            css:{
                files:'<%= less.default.options.path %>',
                tasks: ['less']
            },
            mincss:{
                files:'<%= cssBasePath %>/css/app.css',
                tasks: ['cssmin']
            },
            js: {
                files: ['app/*.js','app/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    // loading required modules
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // registering grunt task
    grunt.registerTask('default', ['watch']);

};
