var controller  = require('../controllers/controller'),
    path        = require('path');

module.exports = function(app){
  app.get('/movies', controller.index);
  app.post('/movies', controller.create);
  app.get('/movies/:id', controller.read);
  app.put('/movies/:id', controller.update);
  app.delete('/movies/:id', controller.delete);
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
}
