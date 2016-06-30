module.exports = {
    options: {
        src: 'dev',
    },
    dist: {
        options: {
            dest: 'web',
        }
    },
    dev: {
        options: {
            dest: '.tmp',
            drafts: true,
            future: true,
            safe: true
        }
    }
};
