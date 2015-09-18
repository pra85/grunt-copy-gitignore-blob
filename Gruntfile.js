module.exports = function (grunt) {

    var parse = require('gitignore-globs');
    var globs = parse('.gitignore', { negate: true } );
    grunt.log.ok( globs );

    // Project configuration.
    grunt.initConfig({
        pkg     : grunt.file.readJSON( 'package.json' ),
        clean: {
            pre_build: [
                'build/'
            ]
        },
        copy: {
            build: {
                options : {
                    mode :true
                },
                files:[{
                	expand:true,
                	src: ['**',globs],
                	dest: 'build/'
                }]
            }
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );

    grunt.registerTask( 'default', [ 'clean:pre_build', 'copy'] );
};
