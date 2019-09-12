const express = require('express'),
      app = express(),
      path = require('path'),
      mongoose = require('./config/mongoose');

app.use(express.json());
require('./config/routes')(app);

app.listen(6789, () => console.log("listening on port 6789"));
