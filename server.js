const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT|| 3001;
const app = express();

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Use API routes
app.use('/api', apiRoutes);

//Default response
app.use((req, res) => {
    res.status(404).end();
});

//Start Server
app.listen(PORT, () => {
    console.log(`Server now running on port ${PORT}`);
});
