const express = require('express');
const app = express();

app.use(express.json());

// import routes
const userRoutes = require('./routes/userRoutes');

// use routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});