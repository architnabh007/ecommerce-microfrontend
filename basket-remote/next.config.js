const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'basketRemote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Basket': './components/Basket',  // Exposing the Basket component
        },
      })
    );
    return config;
  },
};
