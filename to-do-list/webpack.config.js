

module.exports = {

    // to mimic GitHub Pages serving 404.html for all paths
    // and test spa-github-pages redirect in dev
    devServer: {
        historyApiFallback: {
            rewrites: [{ from: /\//, to: '/404.html' }],
        },
    },
};