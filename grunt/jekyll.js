module.exports = {
    options: {
        // bundleExec: true,
        src: '.tmp',
        layouts: '_layouts',
        plugins: '_plugins',
    },
    dist: {
        options: {
            dest: 'web',
        }
    },
    dev: {
        options: {
            dest: 'server',
            drafts: true,
        }
    }
};