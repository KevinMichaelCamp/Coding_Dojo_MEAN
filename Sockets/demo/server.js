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
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;

io.on('connection', function (socket) { //2

  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  socket.on('thankyou', function (data) { //7
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });

});
