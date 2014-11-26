module.exports = {
    dev: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: 'dev',
                dest: '.tmp/',
                src: [
                    '**/*', // Copies everything
                    '!**/scss/**', // Except the SCSS, this is handled by compass
                ]
            }
        ]
    },
    dist: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: 'dev',
                dest: '.tmp/',
                src: [
                    '**/*', // Copies everything
                    '!**/scss/**', // Except the SCSS, this is handled by compass
                ]
            }
        ]
    },
};