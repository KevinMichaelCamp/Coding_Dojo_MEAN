var messages_controller = require('../controllers/messages_controller');

module.exports = function(app){
  app.get('/', messages_controller.index);
  app.post('/messages', messages_controller.create_message);
  app.post('/messages/:id', messages_controller.create_comment);
}
