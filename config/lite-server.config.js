var compress = require('compression');

module.exports = function(browserSync) {
    return {
        port: 3000,
        https: true,
        server: {
            baseDir: './dist',
            middleware: [compress()]
        }
    }
};
