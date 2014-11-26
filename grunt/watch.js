module.exports = {
	options: {
		livereload: true
	},
	styles: {
		files: 'dev/_assets/scss/{,*/}*.scss',
		tasks: ['sass:dev', 'jekyll:dev'],
	},
	posts: {
		files: 'dev/**/*.{md,markdown}',
		tasks: ['copy:dev', 'jekyll:dev'],
	},
	templates: {
		files: 'dev/**/*.html',
		tasks: ['copy:dev', 'jekyll:dev'],
	},
	configFiles: {
		files: [ 'Gruntfile.js', 'grunt/*.{js,yaml}' ],
		options: {
			reload: true
		}
	},
};