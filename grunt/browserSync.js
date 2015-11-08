module.exports = {
    bsFiles: {
        src: '.tmp/**/*.{html,js,css,png,jpg,svg,gif}'
    },
    options: {
        server: {
            baseDir: '.tmp',
        },
        https: {
            key: 'server.key',
            cert: 'server.crt',
        },
        notify: false,
        watchTask: true
    }
};
