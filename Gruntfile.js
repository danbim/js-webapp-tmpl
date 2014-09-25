module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      'build/<%= pkg.name %>.browserify.js': ['src/<%= pkg.name %>.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/<%= pkg.name %>.browserify.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'static/', src:['**'], dest: 'dist/'}
        ]
      }
    },
	clean: ['build/','dist/'],
    jshint: {
      all: ['src/**/*.js']
    },
    watch: {
      js: {
        files: ['src/*.js'],
        tasks: ['jshint','browserify','uglify']
      },
      static: {
        files: ['static/**'],
        tasks: ['copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['browserify','uglify','copy']);

};
