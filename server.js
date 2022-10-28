const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize') (session.Store);
const controllers = require('./controllers');

const app = express();

const PORT = process.env.PORT || 3001;

const sess = {
    secret: "top secret",
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })  
};

app.use(session(sess));

const hbs = handlebars.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Sets static folder to public.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home', {layout : 'main'});
});
app.get('/api', (req, res) => { // this is not the correct address, just an example
    res.render('daycareBooking', {layout : 'main'});
});

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}, at http://localhost:3001`);
    });
});