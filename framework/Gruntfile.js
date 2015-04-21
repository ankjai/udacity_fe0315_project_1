module.exports = function(grunt) {
	grunt.initConfig({
		/* ImageOptim configuration */
		imageoptim: {
			dev: {
				options: {
					jpegMini: false,
					imageAlpha: true,
					quitAfter: true
				},
				src: ['images/']
			}
		},

		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						width: 800,
						suffix: "_x2",
						quality: 50
					}]
				},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'images_src/',
					dest: 'images/'
				}]
			}
		},

		/* Clear out the images directory if it exists */
		clean: {
			dev: {
				src: ['images'],
			},
		},

		/* Generate the images directory if it is missing */
		mkdir: {
			dev: {
				options: {
					create: ['images']
				},
			},
		},

		/* Copy the "fixed" images that don't go through processing into the images/directory */
		copy: {
			dev: {
				files: [{
					expand: true,
					src: 'images_src/fixed/*.{gif,jpg,png}',
					dest: 'images/'
				}]
			},
		},
	});

	grunt.loadNpmTasks('grunt-imageoptim');
	// grunt.loadNpmTasks('grunt-responsive-images');
	// grunt.loadNpmTasks('grunt-contrib-clean');
	// grunt.loadNpmTasks('grunt-contrib-copy');
	// grunt.loadNpmTasks('grunt-mkdir');
	grunt.registerTask('default', ['imageoptim']);
};