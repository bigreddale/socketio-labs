'use strict';

var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({ port: 3000 });

var io = require('socket.io')(server.listener);

server.register(require('inert'), function(err) {
	if (err) {
		throw err;
	}

	server.route({
		method: 'GET',
		path: '/',
		handler: {
			file: 'index.html'
		}
	});
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

server.start(function(err) {
	if (err) {
		throw err;
	}

	console.log('listening on *:3000');
});


