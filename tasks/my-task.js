module.exports = function(grunt) {

 console.log('tasks/my-task.js is loaded!');

 grunt.registerTask('hello', 'say hello', function(name){
  if(!name || !name.length)
    grunt.warn('you need to provide a name.');
    console.log('hello ' + name);
  });
}
