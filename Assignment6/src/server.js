const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const Server = http.createServer(requestHandler);
const PORT = 5000;

async function requestHandler(req, res) {
    const data = await fs.readFile(path.join(__dirname, '../data.json'));

    res.write(data);
    res.end();
}

Server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});