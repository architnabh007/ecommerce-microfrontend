const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'productsRemote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './ProductList': './components/ProductList',
        },
      })
    );
    return config;
  },
};
