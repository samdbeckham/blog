module.exports = {
    options: {
        livereload: true
    },
    styles: {
        files: 'dev/_assets/scss/{,*/,*/*/}*.scss',
        tasks: ['sass:dev','autoprefixer:dev'],
    },
    svg: {
        files: 'dev/_assets/svg/{,*/}*.svg',
        tasks: [
            'svgstore',
            'jekyll:dev',
            'sass:dev',
            'autoprefixer:dev'
        ],
    },
    jekyll: {
        files: [
            'dev/{,*/_posts/}*.{md,markdown}',
            'dev/_layouts/*.html',
            'dev/_includes/*.html',
            'dev/made/*.html',
            'dev/wrote/*.html',
            'dev/_plugins/{,*/}*.rb'
        ],
        tasks: [
            'jekyll:dev',
            'sass:dev',
            'autoprefixer:dev'
        ],
    },
    configFiles: {
        files: [ 'Gruntfile.js', 'grunt/*.{js,yaml}' ],
        options: {
            reload: true
        }
    }
};
