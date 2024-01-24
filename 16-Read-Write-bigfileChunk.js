const http = require('http');
//const { readFileSync } = require('fs');
const { createReadStream } = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
    const fileStream = createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);  //pipe is used from readStream to writeStream to send data in chunks
    });
    fileStream.on('error', (err) => {
        res.end(err);
    });
});

server.listen(5000);

