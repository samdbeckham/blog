module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: 'dev/_assets/scss',
            src: ['{,*/}*.scss'],
            dest: 'web/assets/css',
            ext: '.css'
        }]
    },
    dev: {
        files: [{
            expand: true,
            cwd: 'dev/_assets/scss',
            src: ['{,*/}*.scss'],
            dest: '.tmp/assets/css',
            ext: '.css'
        }]
    },
};