module.exports = {
    dist: {
        devFile: 'node_modules/npm-modernizr/modernizr.js',
        outputFile: 'web/scripts/vendor/modernizr.js',
        files: {
            src: [
                'dev/_assets/scripts/{,*/}*.js',
                'dev/_assets/scss/{,*/}*.scss'
            ]
        },
        uglify: true
    }
};