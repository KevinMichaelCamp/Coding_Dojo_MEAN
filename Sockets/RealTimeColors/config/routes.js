module.exports = function Route(app, server){
	var color;
	// this gets the socket.io module
	var io = require('socket.io').listen(server)
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	})
	//listen to connection even from the client side
	io.sockets.on('connection', function (socket){
		socket.send(color)
		//server listens to "color_1" event
	 	socket.on("color_1", function (data){
	 		//generate a random number
	 		color = '#ad394e';
		  //will emit the data to the client
		  io.emit('color', {response: color});
		});
		//server listens to "color_2" event
	 	socket.on("color_2", function (data){
	 		//generate a random number
	 		color = '#360a9c';
		  //will emit the data to the client
		  io.emit('color', {response: color});
			socket.broadcast.emit('color', {response: color});
		});
		//server listens to "color_3" event
	 	socket.on("color_3", function (data){
	 		//generate a random number
	 		color = '#419604';
		  //will emit the data to the client
		  io.emit('color', {response: color});
		});
		socket.on("reset", function(data){
			color = 'white';
			io.emit('color', {response: color});
		});
	})
};
