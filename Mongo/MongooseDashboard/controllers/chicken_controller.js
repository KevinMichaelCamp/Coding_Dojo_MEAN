var Chicken = require('../models/chicken');

module.exports = {


  create: function(req, res){
    let chicken = new Chicken();
    chicken.name = req.body.name;
    chicken.age = req.body.age;
    chicken.color = req.body.color;
    chicken.description = req.body.description;
    console.log('Chicken b4 save: ', chicken);
    chicken.save()
      .then(newChicken => {
        res.redirect('/')
      })
      .catch(err => {
        for(var key in err.errors) {
          req.flash('create', err.errors[key].message);
        }
        res.redirect('/chickens/new')
      })
  },


  destroy: function(req, res){
    Chicken.remove({_id: req.params.id})
      .then(deletedChicken => {
        console.log(deletedChicken.name, "removed from database");
        res.redirect('/')
      })
      .catch(err => {
        console.log(err);
        res.redirect('/')
      })
  },


  display: function(req, res){
    console.log(req.params.id);
    Chicken.find({_id: req.params.id}, function(err, chicken){
      if(err){
        console.log(err);
        res.redirect('/')
      }
      else{
        res.render('display', {chicken: chicken[0]});
      }
    })
  },


  edit: function(req, res){
    Chicken.find({_id: req.params.id}, function(err, chicken){
      if(err){
        console.log(err);
        res.redirect('/')
      }
      else{
        res.render('edit', {chicken: chicken[0]})
      }
    })
  },


  index: function(req, res){
    Chicken.find({}, function(err, chickens){
      if (err) {
        console.log(err);
        res.redirect('/')
      }
      else{
        res.render('index', {chickens: chickens});
      }
    })
  },


  new: function(req, res){
    res.render('new')
  },


  update: function(req, res){
    Chicken.update({_id: req.params.id}, {
      name: req.body.name,
      age: req.body.age,
      color: req.body.color,
      description: req.body.description
    })
    .then(result => {
      res.redirect('/')
    })
    .catch(err => {
      console.log(err);
      res.redirect(`/chickens/edit/${req.params.id}`)
    })
  }
}
