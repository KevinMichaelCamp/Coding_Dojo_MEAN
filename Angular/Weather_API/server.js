const express = require('express'),
      app = express(),
      path = require('path');

app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));
require('./config/routes')(app);

app.listen(4200, () => console.log("listening on port 4200"));
