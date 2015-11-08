module.exports = {
    dev: {
        files: {
            '.tmp/scripts/main.js': 'dev/_assets/scripts/main.js',
            '.tmp/serviceWorker.js': 'dev/_assets/scripts/serviceWorker.js'
        }
    },
    dist: {
        files: {
            'web/scripts/main.js': 'dev/_assets/scripts/main.js',
            'web/serviceWorker.js': 'dev/_assets/scripts/serviceWorker.js'
        }
    }
};
