const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const handlebars = require('express-handlebars');
const controllers = require('./controllers');

// const Model = require("./models"); do we actually need this in here??

const app = express();

const PORT = process.env.PORT || 3001;

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
}));

// Sets static folder to public.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', controllers);

app.get('/', (req, res) => {
    res.render('main', {layout : 'index'});
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}, at http://localhost:3001`);
    });
});