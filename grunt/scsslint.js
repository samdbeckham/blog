module.exports = {
    dist: {
        options: {
            config: '.scss-lint.yml',
            exclude: [
                'dev/_assets/scss/generic/_reset.scss',
                'dev/_assets/scss/trumps/_shame.scss'
            ]
        },
        files: [{
            expand: true,
            cwd: 'dev/_assets/scss',
            src: '{,*/,*/*/}*.scss'
        }]
    },
};