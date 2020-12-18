const user = require('../api/user/network');
const responses = require('../network/responses');

const routes = function (server) {
  server.use('api/users', user);
}

module.exports = routes;