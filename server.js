const express = require('express');

const app = express();

// middleware
app.use(express.json());

// route
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/hello', (req, res) => {
    res.send('Hello from backend');
});
// start server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});