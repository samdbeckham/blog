module.exports = {
    dist: { 
        options: {
            collapseWhitespace: true,
            removeComments: true,
            removeIgnored: true,
            // lint: true,
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
