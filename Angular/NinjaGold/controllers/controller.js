var Ninja = require('../models/Ninja');

module.exports = {

  index: function(req, res){
    Ninja.find()
      .then(ninjas => res.json(ninjas))
      .catch(err => res.json(err));
  },


}
