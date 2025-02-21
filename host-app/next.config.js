const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          productsRemote: 'productsRemote@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          basketRemote: 'basketRemote@http://localhost:3002/_next/static/chunks/remoteEntry.js',
        },
      })
    );
    return config;
  },
};
