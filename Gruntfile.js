module.exports = function (grunt) {

// grunt.registerTask('hi', function() {
// 	console.log('Hi Dudes');
// });

// grunt.registerTask('hi', function() {
// 	console.log('Hi Dudes');
// });

grunt.initConfig({
  spriteGenerator: {
    options: {},
    files: {
      'img/*': ['css/default_options.css']
    },
  },
});

grunt.loadNpmTasks('grunt-sprite-generator');

grunt.registerTask('sprites');



};