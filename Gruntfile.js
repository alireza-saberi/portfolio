module.exports = function(grunt){
	grunt.initConfig({
		concat:{
			dist:{
				src:['client/js/*.js', 'client/js/libs/*.js'],
				dest:'dist/js/main.js'
				 }
				},
		uglify:{
			build: {
				src:'dist/js/main.js',
				dest:'dist/js/main.min.js'
					}
				}	
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['concat', 'uglify']);
};