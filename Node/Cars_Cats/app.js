const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
  console.log('Client Request URL: ', request.ulr);
  const splitURL = request.url.split('/');
  const fileType = splitURL[1]
  const file = splitURL[2];

  switch(fileType){
    case "stylesheets":
      //serve CSS
      serveCSS(file, response);
      break;
    case 'images':
      //serve Images
      serveIMAGES(file, response);
      break;
    default:
    // Serve an html file
      switch(fileType){
        case "cars":
          if(file === 'new') {
            serveHTML('new.html', response);
          }
          else{
            serveHTML('cars.html', response);
          }
          break;
        case "cats":
          serveHTML('cats.html', response);
          break;
        default:
        // error 404
          serve404(response);
      }
  }
});

function serveHTML(filename, response){
  fs.readFile(`views/${filename}`, 'utf8', function(error, contents){
    if (error) { return serve404(response) }
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write(contents);
    response.end();
  });
}

function serveCSS(filename, response){
  fs.readFile(`stylesheets/${filename}`, 'utf8', function(error, contents){
    if (error) { return serve404(response) }
    response.writeHead(200, {'Content-type': 'text/css'});
    response.write(contents);
    response.end();
  });
}

function serveIMAGES(filename, response){
  fs.readFile(`images/${filename}`, function(error, contents){
    if (error) { serve404(response) }
    response.writeHead(200, {'Content-type': 'img/jpg'});
    response.write(contents);
    response.end();
  });
}

function serve404(response){
  response.writeHead(404);
  response.end("File not found!!!");
}

server.listen(6789);
console.log("Running in localhost at port 6789");
