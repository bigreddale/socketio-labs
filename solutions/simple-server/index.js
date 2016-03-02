'use strict';

var http = require('http').createServer();
var io = require('socket.io')(http);

io.on('connection', handleClient);

function handleClient(clientSocket) {
	console.log('Connection from client');

	clientSocket.on('message',function(data) {
		console.log('Received a message from server:', data);
	});

	clientSocket.on('disconnect',function() {
		console.log('The server has disconnected!');
	});

}

http.listen(80870);
console.log('Server started');
