var controller = require('../controllers/controller'),
    path = require('path');

module.exports = function(app){
  app.get('/authors', controller.index_author);
  app.post('/authors', controller.create_author);
  app.get('/authors/:id', controller.read_author);
  app.put('/authors/:id', controller.update_author);
  app.delete('/authors/:id', controller.delete_author);
  app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
}
