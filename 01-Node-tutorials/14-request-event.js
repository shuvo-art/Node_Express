const http = require('http');

const server = http.createServer();

// Using Event Emitter API
server.on('request', (req, res) => {
    // emits request event
// subcribe to it / listen for it / respond to it
    res.end('Welcome');
});

server.listen(5000);