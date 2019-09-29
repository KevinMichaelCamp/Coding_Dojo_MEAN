var controller = require('../controllers/controller');

module.exports = function(app){
  app.get('/', controller.index_function);
}
