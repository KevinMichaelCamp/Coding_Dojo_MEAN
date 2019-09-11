var our_controller = require('../controllers/controller.js');

module.exports = function(app) {
  // app.get('/home', our_controller.home_function);
  app.post('/register', our_controller.create);
  app.post('/login', our_controller.login);
  app.get('/', our_controller.index);
  app.get("/success", our_controller.success);
}