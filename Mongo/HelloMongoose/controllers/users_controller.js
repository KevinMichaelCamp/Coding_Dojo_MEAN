var User = require('../models/user');

module.exports = {

  users: function(req, res){
    User.find({}, function(err, users){
      if (err) {
        console.log(err);
        res.redirect('/')
      }
      else {
        res.render('index',  {users: users});
      }
    });
  },

  create: function(req, res){
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.save()
      .then(newUser => {
        res.redirect('/')
      })
      .catch(err => {
        console.log("We have an error", err);
        for (var key in err.errors) {
          req.flash('registration', err.errors[key].message);
        }
        res.redirect('/')
      });
  },

  delete: function(req, res){
    User.remove()
      .then(deletedUsers => {
        res.redirect('/')
      })
      .catch(err => res.json(err));
  }

}
