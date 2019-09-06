var cats_controller = require('../controllers/cats_controller');
var details_controller = require('../controllers/details_controller');

module.exports = function(app){
  app.get('/cats', cats_controller.cats_function);
  app.get('/details', details_controller.details_function);
  app.get('/details/1', details_controller.details_function1);
}
