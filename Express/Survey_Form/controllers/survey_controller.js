module.exports = {

  index_function: function(req, res){
    res.render('index');
  },

  results_function: function(req, res){
    console.log(req.body);
    const user = {
      name: req.body.name,
      location: req.body.location,
      language: req.body.language,
      comment: req.body.comment
    }
    res.render('results', {user: user})
  }

}
