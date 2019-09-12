var controller = require('../controllers/controller');

module.exports = function(app){
  app.get('/tasks', controller.index);
  app.post('/tasks', controller.create);
  app.get('/tasks/:id', controller.read);
  app.patch('/tasks/:id', controller.update);
  app.delete('/tasks/:id', controller.destroy);
}
