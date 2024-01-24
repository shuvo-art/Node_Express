const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log('request event');
    if (req.url === '/') {
        res.end('Welcome to our home page');
        console.log('Welcome to our home page');
    } else if (req.url === '/about') {
        // BLOCKING CODE!!!
        for(let i = 0; i < 50; i++) {
            for(let j = 0; j < 50; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page!!');
        console.log('Here is our short history');
    } else {
        res.statusCode = 404; // Set status code for not found
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
        `);
    }
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000....');
});
