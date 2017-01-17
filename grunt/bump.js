module.exports = {
    options: {
        files: ['package.json', 'dev/_assets/scripts/serviceWorker.js'],
        commit: true,
        commitFiles: ['package.json', 'dev/_assets/scripts/serviceWorker.js'],
        commitMessage: ':shipit: Release %VERSION%',
        createTag: false,
        push: false
    }
};