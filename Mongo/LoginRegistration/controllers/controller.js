var User = require('../models/user');
var bcrypt = require('bcrypt');

module.exports = {

  index: function(req, res){
    res.render('index')
  },


  home: function(req, res){
    User.findOne({_id: req.session.user_id}, function(err, user){
      if(err){
        console.log(err);
        res.redirect('/')
      }
      else{
        res.render('home', {user: user})
      }
    });
  },


  login: function(req, res){
    User.findOne({email: req.body.email})
    .then(user => {
      if(user == null){
        req.flash('error', "Email not found")
        res.redirect('/')
      }
      else{
        bcrypt.compare(req.body.password, user.password)
        .then(result => {
          if(result){
            req.session.user_id = user._id;
            res.redirect('/home')
          }
          else{
            req.flash('error', "Invalid password")
            res.redirect('/')
          }
        })
        .catch(err => {
          for(var key in err.errors){
            req.flash("errors", err.errors[key].message);
          }
          res.redirect('/')
        })
      }
    })
    .catch(err => {
      console.log(err);
      res.redirect('/')
    })
  },


  register: function(req, res){
    User.find({email: req.body.email})
    .then(user => {
      if(user.length > 0){
        req.flash('error', "Email already in use");
        res.redirect('/')
      }
      else{
        if(req.body.password != req.body.pw_confirm){
          req.flash('error', "Password does not match confirmation");
          res.redirect('/')
        }
        else{
          let user = new User();
          user.first_name = req.body.first_name;
          user.last_name = req.body.last_name;
          user.email = req.body.email;
          user.birthday = req.body.birthday;
          user.password = req.body.password;
          user.validate(function(err){
            if(err){
              for(var key in err.errors){
                req.flash('errors', err.errors[key].message);
              }
            res.redirect('/')
            }
            else{
              console.log("user before save is", user)
              bcrypt.hash(user.password, 10)
              .then(hashpw => {
                user.password = hashpw;
                user.save()
                .then(newUser => {
                  console.log("successfully created user:", newUser);
                  req.session.user_id = newUser._id;
                  console.log(req.session.user_id);
                  res.redirect('/home')
                })
                .catch(err => {
                  for(var key in err.errors){
                    req.flash('errors', err.errors[key].message);
                  }
                  res.redirect('/')
                })
              })
            }
          })
        }
      }
    })
  }
}
