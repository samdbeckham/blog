module.exports = {
    options: {
        collapseWhitespace: true,
        removeIgnored: true
    },
    dev: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: '.tmp/',
                dest:'.tmp/',
                src: ['**/*.html']
            }
        ]
    },
    dist: {
        options: {
            removeComments: true,
        },
        files: [
            {
                expand: true,
                dot: true,
                cwd: 'web/',
                dest:'web/',
                src: ['**/*.html']
            }
        ]
    }
};
