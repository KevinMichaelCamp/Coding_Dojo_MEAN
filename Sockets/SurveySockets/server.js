const express = require('express'),
      app     = express(),
      session = require('express-session');
      flash   = require('express-flash');


app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
require('./config/routes.js')(app);
const server = app.listen(1337, () => console.log('Listening on port 1337'));
const io = require('socket.io')(server);
