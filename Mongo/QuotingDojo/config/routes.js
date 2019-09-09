var quotes_controller = require('../controllers/quotes_controller');

module.exports = function(app){
  app.get('/', quotes_controller.index);
  app.post('/quotes', quotes_controller.create);
  app.get('/quotes', quotes_controller.display);
}
