var users_controller = require('../controllers/users_controller');

module.exports = function(app) {
  app.get('/home', users_controller.home_function);
}
