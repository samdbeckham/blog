module.exports = {
    dist: {
        devFile: 'node_modules/npm-modernizr/modernizr.js',
        outputFile: 'web/scripts/vendor/modernizr.js',
        files: {
            src: [
                'web/scripts/{,*/}*.js',
                'web/styles/{,*/}*.css'
            ]
        },
        uglify: true
    }
};