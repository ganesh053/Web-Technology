const express = require('express');
const app = express();
const PORT = 3000;

/* ---------------- GLOBAL MIDDLEWARE ---------------- */

// Middleware 1: Log Request Details
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[GLOBAL 1] ${req.method} ${req.url} - ${timestamp}`);
    next(); // pass control
});

// Middleware 2: Additional Processing
app.use((req, res, next) => {
    console.log("[GLOBAL 2] Request is being processed...");
    next();
});

/* ---------------- ROUTE LEVEL MIDDLEWARE ---------------- */

// Custom middleware for specific route
const routeMiddleware = (req, res, next) => {
    console.log("[ROUTE] Route-specific middleware executed");
    next();
};

/* ---------------- ROUTES ---------------- */

// Route with middleware chaining
app.get('/home', routeMiddleware, (req, res) => {
    console.log("[HANDLER] Home route handler executed");
    res.send("Welcome to Home Page");
});

// Another route without route middleware
app.get('/about', (req, res) => {
    console.log("[HANDLER] About route handler executed");
    res.send("About Page");
});

/* ---------------- SERVER START ---------------- */

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});