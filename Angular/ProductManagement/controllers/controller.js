var Product = require('../models/product');

module.exports = {

  index_product: function(req, res){
    Product.find()
      .then(products => res.json(products))
      .catch(err => res.json(err));
  },

  create_product: function(req, res){
    Product.create(req.body)
      .then(person => res.json(person))
      .catch(err => res.json(err));
  },

  read_product: function(req, res){
    Product.findOne({_id: req.params.id})
      .then(product => {
        res.json(product ? product : "No such product in database")
      })
      .catch(err => res.json(err));
  },

  update_product: function(req, res){
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
      .then(result => {
        res.json(result ? result : "No such product in database")
      })
      .catch(err => res.json(err));
  },

  delete_product: function(req, res){
    Product.deleteOne({_id: req.params.id})
    .then(result => {
      res.json(result ? result : "No such product in database")
    })
    .catch(err => res.json(err));
  }


}
