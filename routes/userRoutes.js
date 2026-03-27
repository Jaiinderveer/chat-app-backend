const express = require('express');
const router = express.Router();

// test route
router.get('/test', (req, res) => {
    res.send('User route working');
});
router.get('/login', (req, res) => {
    res.send('Login route');
});

router.get('/register', (req, res) => {
    res.send('Register route');
});

module.exports = router;