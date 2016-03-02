'use strict';

var socket = new io('http://localhost:8082');

socket.on('connect',function() {
	console.log('Connected to server');
});

socket.on('message',function(data) {
	console.log('Received a message from server:', data);
});

socket.on('disconnect',function() {
	console.log('The server has disconnected!');
});

function sendMessageToServer(message) {
	socket.send(message);
}

