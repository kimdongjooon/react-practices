const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        // path: path.resolve('../backend/src/main/resource'),
        filename: 'assets/js/bundle.js'    
    }
    
}