const User = require('../models/user');

module.exports = {

  login: function(req, res){
    User.findOne({name: req.body.name}, (err, user) => {
      if (err) {
        res.json('lol', err);
      } else if (user) {
        req.session.user = user;
        res.json({user: user})
      } else {
        User.create(req.body)
          .then(user => {
            req.session.user = user;
            res.json(user)
          })
          .catch(err => res.json(err));
      }
    });
  },

  logout: function(req, res){
    req.session.destroy();
    res.json('Session ended, bye!')
  },

  getID: function(req, res) {
    if (req.session.user) {
      res.json(req.session.user)
    } else {
      res.status(500).json('Not logged in')
    }
  }
}
