const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        main:'./src/index.js',
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname, 'dist'),
        clean:true,
    },
    plugins:[
        new HTMLWebpackPlugin({
            title:'Restaurant Page',
            template:'./src/index.html',
            meta:{
                description:'Restaurant page the odin project',
                author: 'FadilMs18',
            },
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader', 'css-loader']
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)/i,
                type:'asset/resource'
            },
        ]
    }

}