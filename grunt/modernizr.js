module.exports = {
    dist: {
        devFile: 'bower_components/modernizr/modernizr.js',
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