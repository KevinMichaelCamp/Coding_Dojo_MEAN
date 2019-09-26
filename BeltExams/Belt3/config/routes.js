var login_controller  = require('../controllers/login_controller'),
    user_controller   = require('../controllers/user_controller'),
    path              = require('path');

module.exports = function(app){
  app.post('/session', login_controller.login);
  app.get('/session/logout', login_controller.logout);
  app.get('/session', login_controller.getID);
  app.get('/users', user_controller.index);
  app.post('/users', user_controller.create);
  app.put('/users/:uid/:mid', user_controller.update);
  app.get('/users/:id', user_controller.read);
  app.delete('/users/:id', user_controller.delete);
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
}
