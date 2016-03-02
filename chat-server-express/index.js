'use strict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res) {
	res.sendFile('index.html', { root: '.'});
});

io.on('connection', function(socket) {
	console.log('Client connected');

	socket.on('disconnect', function() {
		console.log('Client disconnected');
	});

	socket.on('chat message', function(msg) {
		console.log('message:', msg);
		io.emit('chat message', msg);
	});
});


http.listen(3000, function() {
	console.log('listening on *:3000');
});

