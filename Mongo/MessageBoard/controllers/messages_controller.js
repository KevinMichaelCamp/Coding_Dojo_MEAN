var Message = require('../models/message');
var Comment = require('../models/comment');

module.exports = {

  create_comment: function(req, res){
    const messageId = req.params.id;
    var comment = new Comment({
      name: req.body.name,
      comment: req.body.comment,
      _message: messageId
    });
    comment.save()
    .then(newComment => {
      Message.findOneAndUpdate({_id: messageId}, {$push: {comments: newComment}}, function(err, data){
        if(err){
          console.log(err);
        }
        else{
          res.redirect('/')
        }
      });
    })
    .catch(err => {
      console.log("We have an error", err);
      for(var key in err.errors){
        console.log(err.errors);
        req.flash('comment', err.errors[key].message);
      }
      res.redirect('/')
    })

  },


  create_message: function(req, res){
    let newMessage = new Message();
    newMessage.name = req.body.name;
    newMessage.message = req.body.message;
    newMessage.save()
      .then(newMessage => {
        res.redirect('/')
      })
      .catch(err => {
        for(var key in err.errors){
          req.flash('create', err.errors[key].message);
        }
        res.redirect('/')
      });
  },


  index: function(req, res){
    Message.find({}, function(err, messages){
      if(err){
        console.log(err);
        res.redirect('/')
      }
      else{
        res.render('index', {allMessages: messages})
      }
    })
  },

}
