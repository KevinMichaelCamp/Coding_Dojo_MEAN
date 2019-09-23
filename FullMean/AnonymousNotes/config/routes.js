var controller  = require('../controllers/controller'),
    path        = require('path');

module.exports = function(app) {
  app.get('/notes', controller.index);
  app.post('/notes', controller.create);
  app.all('*', (req,res,next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'))
  });
}
