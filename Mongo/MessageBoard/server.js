const express = require('express'),
      app = express(),
      path = require('path'),
      mongoose = require('./config/mongoose'),
      session = require('express-session'),
      flash = require('express-flash');

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))
app.use(flash());
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended:true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
require('./config/routes.js')(app);

app.listen(6789, () => console.log("listening on port 6789"));
