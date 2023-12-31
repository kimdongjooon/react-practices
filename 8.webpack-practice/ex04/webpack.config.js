const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        // path: path.resolve('../backend/src/main/resource'),
        filename: 'assets/js/bundle.js'    
    },
    module:{
        rules : [{
            // .css로 끝나는 모듈이라는 의미.
            test: /\.css$/i,
            use: ['style-loader','css-loader']
        }]
    },
    devServer:{
        host: '0.0.0.0',
        port: 9090,
        liveReload: true,
        compress: true,
        hot: false,
        
    }
    
}
