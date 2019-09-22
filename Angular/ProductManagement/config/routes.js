var controller = require('../controllers/controller'),
    path = require('path');

module.exports = function(app){
  app.get('/product', controller.index_product);
  app.post('/product', controller.create_product);
  app.get('/product/:id', controller.read_product);
  app.put('/product/:id', controller.update_product);
  app.delete('/product/:id', controller.delete_product);
  app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
}
