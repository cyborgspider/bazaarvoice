module.exports =function(grunt){
     //Configure your tasks
     //matchdep reduces repetitive code by utilizing the package.json file to loadNpmTasks
     require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
     grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),//load properties from the package as a JSON object
      watch: {
        options:{
          livereload: true
        },
        js: {
          files:   ['src/scripts/*.js'],
          tasks:   ['copy']
        },
        css:{
          files:   ['src/styles/*.scss'],
          tasks:   ['compass']
        },
        html:{
          files:   ['src/*.jade','src/inc/*'],
          tasks:   ['jade']
        }
      },
      copy: {
        main: {
          files: [
            {expand: true, cwd: 'src/images', src: '*', dest: 'build/img'},
            {expand: true, cwd: 'src/scripts/', src: '*', dest: 'build/js'}
          ]
        },
      },
      compass:{
        dist:{
          options:{
            sassPath:'src/styles',
            cssPath:'build/css',
            imagesDir:'src/images',
            httpGeneratedImagesPath:'../img'
          }
        }
      },
      connect:{
        server:{
          options:{
            port:9001,
            base:'build',
            keepalive:true
          }
        }
      },
      jade:{
        compile:{
          options: {pretty:true},
          files:[{
            expand: true,
            cwd:    'src/',
            src:    "*.jade",
            ext:    ".html",
            dest:   "build/"
          }]
        }
      }
     });

     //Wondering where registering the tasks went? Matchdep makes does it automatically.

     //Run the task
     //Edit as needed (compass instead of stylus, kill uglify or coffee, etc.)
     grunt.registerTask('default', ['watch', 'compass', 'jade', 'copy']);
     grunt.registerTask('build', ['compass','jade', 'copy']);
};
