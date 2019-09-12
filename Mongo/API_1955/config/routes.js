var controller = require('../controllers/controller');

module.exports = function(app){
  app.get('/', controller.index);
  app.get('/new/:name', controller.create);
  app.get('/:name', controller.display);
  app.get('/remove/:name', controller.destroy);
}
