module.exports = {
    devServer: {
        https: true,
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/ipinfo/'
        : '/'
}