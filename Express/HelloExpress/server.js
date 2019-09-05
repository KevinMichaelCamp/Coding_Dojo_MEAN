const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
require('./config/routes.js')(app);

app.listen(6789, () => console.log("listening on port 6789"));
