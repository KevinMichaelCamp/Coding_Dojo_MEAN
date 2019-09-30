module.exports = function Route(app, server){
	// this gets the socket.io module
	var io = require('socket.io').listen(server)
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	})
	//listen to connection even from the client side
	io.sockets.on('connection', function (socket){
		var times_pushed = 0;
		//server listens to "posting_form" event
	 	socket.on("add_one", function (data){
	 		//generate a random number
	 		times_pushed ++;
		  //will emit the data to the client
		  io.emit('updated_count', {response: times_pushed});
		});

		socket.on("reset", function(data){
			times_pushed = 0;
			io.emit('updated_count', {response: times_pushed});
		})
	})
};
