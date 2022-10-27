const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');

const app = express();
const Model = require("./models");

const PORT = process.env.PORT || 3001;



// Sets static folder to public.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('<h1>Hello!  Welcome to the Muttel</h1>');
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`);
    });
});

