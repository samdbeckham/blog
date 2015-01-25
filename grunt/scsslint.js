module.exports = {
    dist: {
        options: {
            config: '.scss-lint.yml',
            exclude: [
                'dev/_assets/scss/base/_reset.scss',
                'dev/_assets/scss/base/_shame.scss'
            ]
        },
        files: [{
            expand: true,
            cwd: 'dev/_assets/scss',
            src: '{,*/,*/*/}*.scss'
        }]
    },
};