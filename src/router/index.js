const users = require('./UsersRouter');
const authenticate = require('./AuthenticateRouter');

module.exports = (server) => {
    users(server);
    authenticate(server);
};