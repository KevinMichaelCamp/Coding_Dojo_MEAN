var counter_controller = require('../controllers/counter_controller');

module.exports = function(app){
  app.get('/', counter_controller.index_function);
  app.get('/addTwo', counter_controller.addTwo_function);
  app.get('/reset', counter_controller.reset_function);
}
