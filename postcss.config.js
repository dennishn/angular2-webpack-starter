module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 2 versions', 'ie >= 10', 'and_chr >= 2.3']
        })
    ]
};