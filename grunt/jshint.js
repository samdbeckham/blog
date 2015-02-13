module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: ['dev/_assets/scripts/{,*/}*.js']
};