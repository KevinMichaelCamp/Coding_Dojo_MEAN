var index_controller = require('../controllers/index_controller');
var cats_controller = require('../controllers/cats_controller');
var cars_controller = require('../controllers/cars_controller');
var new_controller = require('../controllers/new_controller');

module.exports = function(app) {
  app.get('/', index_controller.index_function);
  app.get('/cats', cats_controller.cats_function);
  app.get('/cars', cars_controller.cars_function);
  app.get('/new', new_controller.new_function);

}
