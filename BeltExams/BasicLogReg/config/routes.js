var controller  = require('../controllers/controller'),
    path        = require('path');

module.exports = function(app){
  app.post('/login'), controller.login);
  app.get('/user', controller.index_user);
  app.post('/user', controller.create_user);
  app.get('/user/:id', controller.read_user);
  app.put('/user/:id', controller.update_user);
  app.delete('/user/:id', controller.delete_user);
  app.get('/movies', controller.index_movies);
  app.post('/movies', controller.create_movies);
  app.get('/movies/:id', controller.read_movies);
  app.put('/movies/:id', controller.update_movies);
  app.delete('/movies/:id', controller.delete_movies);
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
}
