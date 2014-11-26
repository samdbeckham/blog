module.exports = {
    options: {
        browsers: ['last 3 versions']
    },
    dev: {
        files: [{
            expand: true,
            cwd: '.tmp/css/',
            src: '*.css',
            dest: '.tmp/css/'
        }]
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'web/css/',
            src: '*.css',
            dest: 'web/css/'
        }]
    }
};