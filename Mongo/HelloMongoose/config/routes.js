var users_controller = require('../controllers/users_controller');

module.exports = function(app){
  app.get('/', users_controller.users);
  app.post('/users', users_controller.create);
  app.get('/delete', users_controller.delete);
}
