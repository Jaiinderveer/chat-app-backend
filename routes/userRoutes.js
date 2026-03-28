const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');

// test route
router.get('/test',checkAuth, (req, res) => {
    res.send('User route working');
});
router.get('/login', (req, res) => {
    res.send('Login route');
});

router.get('/register', (req, res) => {
    res.send('Register route');
});

module.exports = router;