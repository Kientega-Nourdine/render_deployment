// require http module 

const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world My name is Nourdine !');
});

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`App running port http://localhost:${port}`));