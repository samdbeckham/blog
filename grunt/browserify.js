module.exports = {
    dev: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev/_assets',
            dest: '.tmp',
            src: 'scripts/*.js'
        }]
    },
    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev/_assets',
            dest: 'web',
            src: 'scripts/*.js'
        }]
    }
};