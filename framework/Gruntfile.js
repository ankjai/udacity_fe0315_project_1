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
	});

	grunt.loadNpmTasks('grunt-imageoptim');
};