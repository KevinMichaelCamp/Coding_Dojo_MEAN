var login_controller  = require('../controllers/login_controller'),
    user_controller   = require('../controllers/user_controller'),
    appt_controller  = require('../controllers/appt_controller'),
    path              = require('path');

module.exports = function(app){
  app.post('/session', login_controller.login);
  app.get('/session/logout', login_controller.logout);
  app.get('/session', login_controller.getID);
  app.get('/users', user_controller.index);
  app.post('/users/:id', appt_controller.create)
  app.put('/users/:id', user_controller.update);
  app.get('/users/:id', user_controller.read);
  app.delete('/users/:id', user_controller.delete);
  app.get('/appts', appt_controller.index);
  app.put('/appts/:id', appt_controller.update);
  app.get('/appts/:id', appt_controller.read);
  app.delete('/appts/:id', appt_controller.delete);
  app.delete('/users/:uid/:aid', appt_controller.delete_from_user);
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
}
