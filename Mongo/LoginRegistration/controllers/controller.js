var User = require('../models/user.js');
var bcrypt = require('bcrypt');

module.exports = {

  // home_function: function(req, res){
  //   res.redirect("/")
  // },

  index: function(req, res){
    res.render('index')
  },

  create: function(req, res){
    console.log("req.body is", req.body)
    let user = new User();
    console.log("user before assignments is", user)
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.validate(function(err){
      if (err) {
        for(var key in err.errors){
          req.flash("regerr", err.errors[key].message);
        }
        res.redirect("/");
      }
      else{
        console.log("user before save is", user)
        bcrypt.hash(req.body.password, 10)
          .then(hashpw => {
            user.password = hashpw;
            user.save()
            .then(data => {
              console.log("successfully created user", data);
              req.session['user_id'] = user._id
              console.log(req.session['user_id'])
              res.redirect('/success')
            })
            .catch(err => {
              for(var key in err.errors){
                req.flash("regerr", err.errors[key].message);
              }
              res.redirect("/");
            });
          })
          .catch(err => {
              // res.json(err)
              for(var key in err.errors){
                req.flash("hasherr", err.errors[key].message);
              }
              res.redirect("/");
          });
      }
    })
    
    // if(req.body.password.length == 0){
    //   req.flash("")
    // }

    
  },

  success: function(req, res){
    res.render("success")
  },

  login: function(req, res){
    console.log("req.body is", req.body)
    User.find({email:req.body.email}, (err, this_user) => {
        if (err) {
          for(var key in err.errors){
            req.flash("loginerr", err.errors[key].message);
          }
          res.redirect('/')
        }
        else {
          console.log(this_user)
            bcrypt.compare(req.body.password, this_user[0].password)
              .then(result => {
                  if (result){
                    console.log("true")
                    req.session['user_id'] = this_user[0]._id
                    res.redirect('/success')
                  }
                  else{
                    console.log("false")
                    req.flash("loginerr", "You cannot be logged in");
                    res.redirect('/')
                  }
              })
              .catch(err => {
                  for(var key in err.errors){
                    req.flash("hasherr", err.errors[key].message);
                  }
                  res.redirect('/')
              })
        }
    })
    
  },

}