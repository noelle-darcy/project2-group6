const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const sequelize = require('./config/connection');
const controllers = require('./controllers');

const app = express();

const PORT = process.env.PORT || 3001;

const hbs = handlebars.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Sets static folder to public.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}, at http://localhost:3001`);
    });
});