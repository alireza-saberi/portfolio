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
				},
		imagemin: {
			dynamic: {
				files: [{ 
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png, jpg, gif}'],
					dest: 'dist/images/'
				}]
			}
		},
		watch: {
			script: {
				files: ['client/js/*.js', 'client/js/libs/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			}
		}	
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);
};