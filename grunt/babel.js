module.exports = {
    options: {
        sourceMap: true,
        presets: ['babel-preset-es2015']
    },
    dist: {
        files: {
            "dist/app.js": "dist/app_es6.js"
        }
    }
}
