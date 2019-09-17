var controller = require('../controllers/controller');

module.exports = function(app){
  app.get('/cakes', controller.index);
  app.post('/cakes', controller.create);
  app.get('/cakes/:id', controller.read);
  app.patch('/cakes/:id', controller.update);
  app.delete('/cakes/:id', controller.destroy);
}
