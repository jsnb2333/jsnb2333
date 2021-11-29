module.exports = {
    lintOnSave: false, 
    devServer: {
        proxy: {
            '/pzxy': {
                target: 'http://localhost:10086',
                pathRewrite: {'^/pzxy': ''},
            },
        }
    }
}