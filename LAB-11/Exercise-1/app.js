const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Set response header
    res.setHeader('Content-Type', 'text/plain');

    // Routing
    if (req.url === '/') {
        res.write("Welcome to Home Page");
    } 
    else if (req.url === '/about') {
        res.write("About Page");
    } 
    else {
        res.write("404 Not Found");
    }

    // End response
    res.end();
});

// Port setup (IMPORTANT for deployment)
const PORT = process.env.PORT || 3000;

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});