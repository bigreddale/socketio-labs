'use strict';

var http = require('http').createServer();
var io = /* TODO */
var debug = require('debug');

/* TODO: when 'connection' event is fired, call handleClient */

function handleClient(clientSocket) {
	console.log('Connection from client');

	/* TODO: when 'message' event is fired, display a message on the console
	 *       indicating that a message has been sent from the client
	 */


	/* TODO: when 'disconnect' event is fired, display
	 *       a 'Client disconnected' message on the console
	 */

}

/* TODO: tell the http  server to listen on port 8080 */

