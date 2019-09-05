const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
  console.log('<^>client request URL: ', request.url);

  // Routing
  if(request.url === '/') {
    fs.readFile('index.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }

  else if(request.url === '/ninjas') {
    fs.readFile('ninjas.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    })
  }

  else if(request.url === '/dojos/new') {
    fs.readFile('dojos.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    })
  }

  else if(request.url === '/style.css') {
    fs.readFile('style.css', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-type': 'text/css'});
      response.write(contents);
      response.end();
    })
  }

  // Error
  else{
    response.writeHead(404);
    response.end('File not found!!!');
  }
});

server.listen(6789);
console.log("Running on localhost at port 6789 :)");
