const http = require('http');

const server = http.createServer((req, res) => {
    // Set Content-Type header to indicate HTML content
    res.setHeader('Content-Type', 'text/html');

    // Handle different routes
    if (req.url === '/') {
        res.end('<h1>Welcome to our home page</h1>');
    } else if (req.url === '/about') {
        res.end('<h1>Here is our short history</h1>');
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
        `);
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
