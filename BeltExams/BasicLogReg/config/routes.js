var controller  = require('../controllers/controller'),
    path        = require('path');

module.exports = function(app){
  app.post('/session', controller.login);
  app.get('/session/logout', controller.logout);
  app.get('/session', controller.getID);
  app.get('/users', controller.index_user);
  app.put('/users/:id', controller.update_user);
  app.get('/users/:id', controller.read_user);
  app.delete('/users/:id', controller.delete_user);
  app.get('/movies', controller.index_movie);
  app.post('/users/:id', controller.create_movie);
  app.put('/movies/:id', controller.update_movie);
  app.get('/movies/:id', controller.read_movie);
  app.delete('/movies/:id', controller.delete_movie);
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
}
