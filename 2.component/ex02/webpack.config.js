const path = require('path');

module.exports = function(env) {
    return {
        mode: "development",
        entry: path.resolve(`src/${env.src}/index.js`),
        output: {
            path: path.resolve('public'),
            filename: 'assets/js/main.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module:{
            rules : [{
                test: /\.js/i,
                exclude: /node_modules/,
                use: 'babel-loader'
            },{
                // .css|.scss|.sass로 끝나는 파일이름 빌드할때. 로더사용.
                test: /\.(css|scss|sass)$/i,
                use: ['style-loader','css-loader','sass-loader']
            }, {
                test: /\.(png|jp?eg|gif|svg|icon|tif?f|bmp)/i,
                type: 'asset/resource'
            }]
        },
        devServer:{
            host: '0.0.0.0',
            port: 9090,
            liveReload: true,
            compress: true,
            hot: false,
            
        }
    
    };
}