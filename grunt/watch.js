module.exports = {
    js: {
        files: ['app/src/**/*.js'],
        tasks: ['concat', 'babel']
    },
    html: {
        files: ['app/index.html'],
        tasks: ['copy']
    },
    sass: {
        files: ['app/src/**/*.scss'],
        tasks: ['sass']
    },
    grunt: {
        files: ['grunt/**/*'],
        tasks: [],
        options: {
            spawn: false,
            reload: true
        }
    }
}
