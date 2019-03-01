const proxy = [
    {
      context: '/v1',
      target: 'https://medlog-api.herokuapp.com/',
      pathRewrite: {'^/api/' : '/v1/'}
    }
  ];
  module.exports = proxy;