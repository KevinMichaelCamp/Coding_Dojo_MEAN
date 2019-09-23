var Note = require('../models/note');
module.exports = {

  index: function(req, res) {
    Note.find()
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },

  create: function(req, res) {
    Note.create(req.body)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  }

}
