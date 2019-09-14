const express = require('express'),
      app     = express();

app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));
require('./config/routes')(app);

app.listen(6789, () => console.log("listening on port 6789"));
