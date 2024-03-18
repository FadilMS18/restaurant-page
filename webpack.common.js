const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        main:'./src/main.js',
    },
    output:{
        filename:'index.js',
        path:path.resolve(__dirname, 'dist'),
        clean:true,
    },
    plugins:[
        new HTMLWebpackPlugin({
            title:'Restaurant Page',
            template:'./src/index.html',
            inject:'body',
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
                use:[{ 
                    loader:'file-loader',
                    options:{
                        name:'images/[name].[ext]'
                    }
                }]
            },
            {
                test:/\.css$/i,
                type:'asset/resource',
            },
        ]
    }

}