module.exports = {
  allowedHosts: ['localhost', '.localhost'],
  host: 'localhost',
  port: 3000,
  hot: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  historyApiFallback: true,
  client: {
    webSocketURL: 'auto://0.0.0.0:0/ws',
  },
};