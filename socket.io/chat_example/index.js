// Daniel Ryaboshapka
// February 18th 2019 
// index.js -- intro to hello world example for socket.io

var app = require('express')(); //FUNCTION HANDLER FOR HTTP TO LISTEN TO 
var http = require('http').Server(app);


/* Defines a route handler "/" that gets called 
* when we go to the home webpage
*/
app.get('/', function(req,res){
	res.send(__dirname + '/index.html');
});

/*
* Http listens on port 3000
*/
http.listen(3000, function(){
	console.log('listening on *:3000');
});