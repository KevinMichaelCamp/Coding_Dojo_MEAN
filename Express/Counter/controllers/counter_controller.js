module.exports = {

  index_function: function(req, res){
    res.render('index', {counter: addOne(req)});
  },
  addTwo_function: function(req, res){
    res.render('index', {counter: addTwo(req)});
  },
  reset_function: function(req, res){
    res.render('index', {counter: reset(req)});
  }

}

function addOne(req){
  return req.session.counter = req.session.counter ? req.session.counter + 1 : 1;
}

function addTwo(req){
  return req.session.counter = req.session.counter ? req.session.counter + 2 : 1;
}

function reset(req){
  return req.session.counter = 0;
}
