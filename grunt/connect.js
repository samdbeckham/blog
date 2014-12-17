module.exports = {
    options: {
        port: 9000,
        open: true,
        livereload: 35729,
        hostname: '0.0.0.0'
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