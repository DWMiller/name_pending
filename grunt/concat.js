module.exports = {
    js: {
        options: {
            sourceMap: true
        },
        src: [
            'app/src/core/index.js',
            'app/src/**/*.js',
        ],
        dest: 'dist/app_es6.js'
    }
}