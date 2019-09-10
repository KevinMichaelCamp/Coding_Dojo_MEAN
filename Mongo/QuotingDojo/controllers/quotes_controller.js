var Quote = require('../models/quote');

module.exports = {

  index: function(req, res){
    res.render('index')
  },

  create: function(req, res){
    let quote = new Quote();
    quote.name = req.body.name;
    quote.content = req.body.content;
    quote.save()
      .then(newQuote => {
        res.redirect('/quotes')
      })
      .catch(err => {
        for (var key in err.errors){
          req.flash('addQuote', err.errors[key].message);
        }
        res.redirect('/')
      });
  },

  display: function(req, res){
    Quote.find({}).sort('-createdAt').exec(function(err, quotes){
      if (err) {
        console.log(err);
        res.redirect('/')
      }
      else {
        res.render('quotes', {quotes: quotes});
      }
    })
  }

}
