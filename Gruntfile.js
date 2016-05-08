'use strict';
var grunt = require('grunt');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    print: {
     target1: ['index.html', 'src/styles.css', 2],
     target2: 'data',
     hello: 'world'
   },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/**/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    bower_concat:{
        all: {
                dest: "js/bower.js",
                destCss: "css/bower.css"
        },
        mainFiles: {
          'grunt-example-script': ['src/grunt-example-script-1.js','src/grunt-example-script-2.js']
        }
    },
    watch: {
        less: {
                files: [ 'bower.json' ],
                tasks: [ 'exec:bower_install' ]
        },
    },
    exec: {
        bower_install: {
                cmd: "bower install"
        }
    }
});

  // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-bower-concat');

   grunt.loadNpmTasks('grunt-install-dependencies');

  // Load the plugin from tasks directory.
   grunt.loadTasks('./tasks');


  //Default task(s).
   grunt.registerTask('default', ['install-dependencies']);

  // A very basic Custom task.
   grunt.registerTask('log', 'Log some stuff.', function() {
     grunt.log.write('Logging some stuff...').ok();
   });

   grunt.registerMultiTask('print', 'print targets', function() {
     grunt.log.writeln(this.target + ': ' + this.data);
   });
};
