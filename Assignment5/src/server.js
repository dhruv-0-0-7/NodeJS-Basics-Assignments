const { createServer } = require('http');   // 'http' core module

const PORT = 5000;  // Server port
const HOST = 'localhost';   // Server Hostname
const Server = createServer(RequestHandler);    // HttpServer Instance

// RequestHandler for HttpServer
function RequestHandler(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
}

// Start the Server
Server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});