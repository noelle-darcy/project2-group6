const express = require('express');
const { Server } = require('http');
const path = require('path');
const sequelize = require('./config/connection');
// const Model = require("./models");

const app = express();

const PORT = process.env.PORT || 3001;

// Sets static folder to public.
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.send('<h1>Hello!  Welcome to the Muttel</h1>'); // test message, delete later
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
			console.log(`Server is available at http://localhost:3001`);
    });
});

