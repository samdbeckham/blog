var grunt = require('grunt');

module.exports = {
    options: {
        port: 9000,
        open: true,
        livereload: 35729,
        hostname: '0.0.0.0',
        protocol: 'https',
        key: grunt.file.read('./server.key'),
        cert: grunt.file.read('./server.crt'),
    },
    livereload: {
        options: {
            middleware: function(connect) {
                return [
                    connect.static('.tmp'),
                    connect().use('/bower_components', connect.static('./bower_components'))
                ];
            }
        }
    }
};
