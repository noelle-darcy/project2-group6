const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const handlebars = require('express-handlebars');
// const Model = require("./models");

const app = express();
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3001;

// Sets static folder to public.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('main', {layout : 'index'});
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT} at http://localhost:3001`);
    });
});