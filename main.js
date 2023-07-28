// A simple server with simple functionality

const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    // function for reading/writing our html files
    const get = (file) => {   
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                res.write('Error: ' + err);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    }

    if (req.url == '/') {
        get('./index.html');
    } else if (req.url == '/about') {
        get('./about.html')
    } else if (req.url == '/contact') {
        get('./contact-me.html')
    } else {
        get('./404.html');
    }

})

server.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
})
