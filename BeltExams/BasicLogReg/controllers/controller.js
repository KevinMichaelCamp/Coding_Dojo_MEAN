var User  = require('../models/user'),
    Movie = require('../models/movie');

module.exports = {

  login: function(req, res){
    User.findOne({email: req.body.email}, (err, user) => {
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
  },

  index_user: function(req, res){
    User.find()
      .then(users => res.json(users))
      .catch(err => res.json(err));
  },

  read_user: function(req, res){
    User.findOne({_id: req.params.id})
      .then(user => {
        res.json(user ? user : "No such user in database")
      })
      .catch(err => res.json(err));
  },

  update_user_movie: function(req, res) {
    let movie = Movie.findOne({_id: req.params.mid});
    User.findOneAndUpdate({_id: req.params.uid}, {$set: {movies: ({_id: req.params.mid}, req.params.body)}}, {new: true})
      .then(user => {
        res.json(user ? user : "No such user in database")
      })
      .catch(err => res.json(err));
  },

  delete_user: function(req, res){
    User.deleteOne({_id: req.params.id})
    .then(user => {
      res.json(user ? user : "No such user in database")
    })
    .catch(err => res.json(err));
  },

  index_movie: function(req, res){
    Movie.find()
      .then(movie => res.json(movie))
      .catch(err => res.json(err));
  },

  create_movie: function(req, res){
    var movie = new Movie({
      title: req.body.title,
      year: req.body.year,
      likes: req.body.likes,
      _user: req.params.id
    });
    movie.save()
      .then(newMovie => {
        User.findOneAndUpdate({_id: req.params.id}, {$addToSet: {movies: newMovie}}, {new: true}, function(err, data){
          if (err) {
            res.json(err)
          } else {
            res.json(data)
          }
        })
      })
      .catch(err => res.json(err));
  },

  update_movie: function(req, res){
      Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
      .then(movie => {
        res.json(movie ? movie : "No such movie in database")
      })
      .catch(err => res.json(err));
  },

  read_movie: function(req, res){
    Movie.findOne({_id: req.params.id})
      .then(movie => {
        res.json(movie ? movie : "No such movie in database")
      })
      .catch(err => res.json(err));
  },

  delete_movie: function(req, res){
    Movie.deleteOne({_id: req.params.id})
    .then(movie => {
      console.log("Movie deleted", movie)
      res.json(movie ? movie : "No such movie in database")
    })
    .catch(err => res.json(err));
  },

  delete_user_movie: function(req, res){
    User.find({_id: req.params.uid})
      .then(user => {
        for (let i = 0; i < user[0].movies.length; i++){
          if (user[0].movies[i]._id == req.params.mid){
            user[0].movies.splice(i, 1)
          }
        }
        user[0].save()
        .then((newUser) => {
          User.find({})
          .then((users) => {
            res.json(users)
          })
        })
      })
      .catch(err => res.json(err));
  }

}
