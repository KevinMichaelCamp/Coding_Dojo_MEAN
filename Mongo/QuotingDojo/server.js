const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('./config/mongoose');
const session = require('express-session');
const flash = require('express-flash');

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(flash());
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
require('./config/routes.js')(app);

app.listen(6789, () => console.log("listening on port 6789"));
