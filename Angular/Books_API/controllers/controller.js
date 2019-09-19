var Author = require('../models/author');
var Book = require('../models/book');

module.exports = {

  index_book: function(req, res){
    Book.find()
      .then(books => res.json(books))
      .catch(err => res.json(err));
  },

  create_book: function(req, res){
    var book = new Book({
        title: req.body.title,
        year: req.body.year,
        _author: req.params.id
    })
    book.save()
      .then(newBook => {
        Author.findOneAndUpdate({_id: req.params.id}, {$addToSet: {books: newBook}}, {new: true}, function(err, data){
          if (err) {
            res.json(err)
          }
          else {
            res.json(data)
          }
        })
      })
  },

  read_book: function(req, res){
    Book.findOne({_id: req.params.id})
      .then(book => {
        res.json(book ? book : "No such book in database")
      })
      .catch(err => res.json(err));
  },


  delete_book: function(req, res){
    Book.findOne({_id: req.params.id})
      .then(book => {
        console.log("HEY!!!", book);
        Author.findOneAndUpdate({_id: book._author}, {$pull: {books: req.params.id}}, {new: true});
      })
      .catch(err => res.json(err));

    Book.deleteOne({_id: req.params.id})
      .then(result => {
        res.json(result ? result : "No such book in database")
      })
      .catch(err => res.json(err));
  },


  index_author: function(req, res){
    Author.find()
      .then(authors => res.json(authors))
      .catch(err => res.json(err));
  },

  create_author: function(req, res){
    Author.create(req.body)
      .then(person => res.json(person))
      .catch(err => res.json(err));
  },

  read_author: function(req, res){
    Author.findOne({_id: req.params.id})
      .then(author => {
        res.json(author ? author : "No such author in database")
      })
      .catch(err => res.json(err));
  },

  update_author: function(req, res){
    Author.findOneAndUpdate(req.params.id, req.body, {new: true})
      .then(result => {
        res.json(result ? result : "No such author in database")
      })
      .catch(err => res.json(err));
  },

  delete_author: function(req, res){
    Author.deleteOne({_id: req.params.id})
    .then(result => {
      res.json(result ? result : "No such author in database")
    })
    .catch(err => res.json(err));
  }


}
