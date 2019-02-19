// Daniel Ryaboshapka
// February 18th 2019 
// index.js -- intro to hello world example for socket.io

var app = require('express')(); //FUNCTION HANDLER FOR HTTP TO LISTEN TO 
var http = require('http').Server(app); //CREATES HTTP SERVER USING APP (REQUIRING EXPRESS)
var io = require('socket.io')(http);



/* Defines a route handler "/" that gets called 
* when we go to the home webpage
*/
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

/*
* Http listens on port 3000
*/
http.listen(3000, function(){
	console.log('listening on *:3000');
});

/*
* On a connection event, first log that a user connected.
* When a user disconnects, log that the user disconnected.
* On a chat message event, display the message
*/
io.on('connection', function(socket){
	console.log('a user connected');

	socket.on('disconnect', function(){
		console.log('user disconnected');
	});

	io.on('connection', function(socket){
  		socket.on('chat message', function(msg){
    		io.emit('chat message', msg);
  		});
	});	

});

// io.emit('some event', { for: 'everyone' });  How to use the io.emit

