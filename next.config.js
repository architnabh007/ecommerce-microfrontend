module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  env: {
    NEXT_PUBLIC_API_URL: "https://fakestoreapi.com/products"
  },
};