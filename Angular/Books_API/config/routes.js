var controller = require('../controllers/controller');

module.exports = function(app){
  app.get('/books', controller.index_book);
  app.get('/books/:id', controller.read_book);
  app.delete('/books/:id', controller.delete_book);
  app.get('/authors', controller.index_author);
  app.post('/authors', controller.create_author);
  app.post('/authors/:id', controller.create_book);
  app.get('/authors/:id', controller.read_author);
  app.put('/authors/:id', controller.update_author);
  app.delete('/authors/:id', controller.delete_author);
}
