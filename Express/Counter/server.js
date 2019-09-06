const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
require('./config/routes.js')(app);

app.listen(6789, () => console.log("listening on port 6789"));
