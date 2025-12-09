// Import express
const express = require('express');
const app = express();

// Define port
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Web Application!');
});

// Sample API route
app.get('/api/status', (req, res) => {
    res.json({
        status: "Running",
        message: "Your web app backend is working!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

