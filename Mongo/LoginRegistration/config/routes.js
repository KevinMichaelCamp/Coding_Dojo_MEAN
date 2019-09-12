var controller = require('../controllers/controller');

module.exports = function(app){
  app.get('/', controller.index);
  app.get('/home', controller.home);
  app.post('/login', controller.login);
  app.post('/register', controller.register);
}
