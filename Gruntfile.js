module.exports = function(grunt) {
	var config = {
		dev: 'dev',
		temp: '.tmp',
		dist: 'web'
	};
	
	require('load-grunt-config')(grunt);
	require('jit-grunt')(grunt);
};