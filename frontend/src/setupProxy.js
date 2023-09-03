const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Set the path you want to proxy, e.g., /api
    createProxyMiddleware({
      target: 'https://api.coingecko.com', // Your target API base URL
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/v3/coins/markets', // Rewrite the path to match the target URL
      },
    })
  );
};