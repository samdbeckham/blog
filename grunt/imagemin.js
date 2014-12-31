module.exports = {
    dev: {
        options: {
            optimizationLevel: 0
        },
        files: [
            {
                expand: true,
                dot: true,
                cwd: 'dev/_assets/images',
                dest:'.tmp/images',
                src: ['**/*.{jpg,gif,png}']
            }
        ]
    },
    dist: {
        options: {
            optimizationLevel: 7
        },
        files: [
            {
                expand: true,
                dot: true,
                cwd: 'dev/_assets/images',
                dest:'web/images',
                src: ['**/*.{jpg,gif,png}']
            }
        ]
    }
};