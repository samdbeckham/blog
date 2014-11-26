module.exports = {
    dev: { 
        options: {
            collapseWhitespace: true
        },
        files: [
            {
                expand: true,
                dot: true,
                cwd: 'server',
                dest: 'server',
                src: [
                    '**/*.html', // Copies all HTML
                ]
            }
        ]
    },
    dist: { 
        options: {
            collapseWhitespace: true,
            removeComments: true,
        },
        files: [
            {
                expand: true,
                dot: true,
                cwd: '.tmp/',
                dest: '.tmp/',
                src: [
                    '**/*.html', // Copies all HTML
                ]
            }
        ]
    },
};