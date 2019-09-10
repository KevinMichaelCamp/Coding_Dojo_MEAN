var chicken_controller = require('../controllers/chicken_controller');

module.exports = function(app){
  app.get('/', chicken_controller.index);
  app.get('/chickens/new', chicken_controller.new);
  app.post('/chickens', chicken_controller.create);
  app.get('/chickens/:id', chicken_controller.display);
  app.get('/chickens/edit/:id', chicken_controller.edit);
  app.post('/chickens/:id', chicken_controller.update);
  app.get('/chickens/destroy/:id', chicken_controller.destroy);
}
