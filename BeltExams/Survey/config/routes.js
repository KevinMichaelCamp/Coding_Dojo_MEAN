var controller  = require('../controllers/controller'),
    path        = require('path');

module.exports = function(app){
  app.get('/users', controller.index_users);
  app.post('/users', controller.create_user);
  app.get('/users/:name', controller.read_user);
  app.put('/users/:id', controller.update_user);
  app.delete('/users/:id', controller.delete_user);
  app.get('/surveys', controller.index_surveys);
  app.post('/users/:id', controller.create_survey);
  app.get('/surveys/:id', controller.read_survey);
  app.put('/surveys/:id', controller.update_survey);
  app.delete('/surveys/:id', controller.delete_survey);
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
}
