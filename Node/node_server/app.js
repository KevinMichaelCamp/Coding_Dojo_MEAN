const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response) {
  console.log('client request URL: ', request.url);

  // Routing
  if(request.url === '/') {
    fs.readFile('index.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'}); // response data
      response.write(contents);
      response.end();
    });
  }

  else if(request.url === '/style.css') {
    fs.readFile('style.css', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-type': 'text/css'});
      response.write(contents);
      response.end();
    })
  }

  // request didn't match anything
  else {
    response.writeHead(404);
    response.end('ERROR 404: File not found!!!');
  }
});
// tell your sever which post to run on
server.listen(6789);
//print terminal to window
console.log("Running in localhost at port 6789");
