var http = require('http');

// 1. Add an event listener on the server variable that listens to the 'request' event.
// The event listener should take a callback function with two arguments, request and response.
var server = http.createServer();

// 2. Move the logic for handling the request from the 'http.createServer()' callback to your new 'request' event listener.
// Remember to remove the 'http.createServer()' callback once the code has been moved.
server.on('request', (req, res) =>{
  res.end('hello w0rld');
})
// 3. Add a second 'request' handler to the HTTP server.
server.on('request', (req, res) =>{
  console.log('New request coming in...');
})
// 4. From inside of the new handler, log the message "New request coming in..." using console.log().
server.on('connection', (req, res) =>{
  console.log('A new connection is made!');
})
// 5. Listen for the 'close' event on the server.
// The event listener should take a callback function that accepts no arguments.

// 6. Inside the 'close' callback, log the message "Closing down the server...".

server.listen(8080);

console.log('Server running at http://localhost:8080');
