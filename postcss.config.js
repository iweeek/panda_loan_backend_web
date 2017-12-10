module.exports = {
    plugins: [
        require('autoprefixer')({browsers:'ios >= 8'}),
        require('postcss-px2rem')({
            remUnit: 37.5,
        })
    ]
}
