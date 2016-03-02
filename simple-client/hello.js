'use strict';

var socket = /* TODO */

socket.on('connect',function() {
	console.log('Connected to server');
});

/* TODO: when a 'message' event fires, display a console
 * message containing the data received.
 */
socket.on('message',function(data) {
	console.log('Received a message from server:', data);
});

/* TODO: when a 'disconnect' event fires, display a console
 * message indicating that the server has disconnected.
 */


function sendMessageToServer(message) {
	socket.send(message);
}

