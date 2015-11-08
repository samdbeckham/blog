module.exports = {
    options: {
        livereload: true
    },
    styles: {
        files: 'dev/_assets/scss/{,*/,*/*/}*.scss',
        tasks: ['sass:dev','autoprefixer:dev'],
    },
    scripts: {
        files: ['dev/_assets/scripts/**/*.{js,json}'],
        tasks: ['browserify:dev']
    },
    images: {
        files: 'dev/_assets/images/**/*.{jpg,gif,png,svg}',
        tasks: 'imagemin:dev'
    },
    svg: {
        files: 'dev/_assets/svg/{,*/}*.svg',
        tasks: ['svgstore','regenerate'],
    },
    jekyll: {
        files: [
            'dev/{wrote,made}/{_drafts,_posts}/*.{md,markdown}',
            'dev/*.{md,markdown}',
            'dev/_layouts/*.html',
            'dev/_includes/*.html',
            'dev/made/*.html',
            'dev/wrote/*.html',
            'dev/_plugins/{,*/}*.rb'
        ],
        tasks: ['regenerate'],
    },
    configFiles: {
        files: ['Gruntfile.js', 'grunt/*.{js,yaml}'],
        options: {
            reload: true
        }
    }
};
