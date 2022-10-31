const router = require('express').Router();
const passport = require('../../config/passport');
const { User, Dog, Reservations, Reviews } = require('../../models');
const withAuth = require('../../utils/auth');
const connection = require("../../config/connection");
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);

router.get('/', async (req, res) => {
    User.findAll({
            include: [{model: Dog}],
        })
    .then(dbUserData => res.json(dbUserData))
    .catch (err => {
        console.log(err);
        res.status(500).json(err);
    });  
});

router.post('/', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect : '/account',
        failureRedirect : '/',
    }) (req, res, next);
});

// Create a new User.
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,

    })
        .then((dbUserData) => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json(dbUserData);
            });
        })
        .catch((err) => {
            console.log((err) => {
                res.status(500).json(err);
            });
        });
    });
// Attempt at bcrypt stuff.
//     try {
//         const newUser = new User({
//             username : username, 
//             email : email,
//             password : password
//         });
//         // encrypt password with bcrypt.
//         bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password,salt, (err, hash) => {
//             if(err) throw err;
//             newUser.password = hash;
//             newUser.save().then((value) => {
//                 console.log(value);
//                 res.redirect('/');
//             })
//         }
//      } catch (err) {
//         res.status(400).json(err)
//     };
// });
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json({ msg: "Your account has been created.", userData });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Login a User.
router.get('/account', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Dog,
                attributes: ["id", "name"],
            },
            {
                model: Dog,
                attributes: ["name"],
                through: Reservations,
                as: "dropOffDate",
            },
        ],
    })
    .then((dbUserData) => {
        if (!dbUserData) {
            res.status(404).json({ message: "User not found"});
            return;
        }
        res.json(dbUserData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Logout a User from the Account Page.  Render the landing page.
router.get('/account', (req, res) => {
    res.render('main');
});

module.exports = router;

//for later:  get user by id, incorrect password, log out, delete user
