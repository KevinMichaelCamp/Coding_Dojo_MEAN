var controller = require('../controllers/controller');

module.exports = function(app){
  app.get('/pokemon', controller.index);
}
