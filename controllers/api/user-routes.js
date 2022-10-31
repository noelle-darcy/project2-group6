const router = require('express').Router();
const passport = require('../../config/passport');
const { User, Dog } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.get('/', withAuth, async (req, res) => {
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{model: Dog}],
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }  
});

router.post('/', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect : '/account',
        failureRedirect : '/',
    }) (req, res, next);
});

// Create a new User.
// Attempt at bcrypt stuff.
// router.post('/', async (req, res) => {
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
    res.render('acount');
});

// Logout a User from the Account Page.  Render the landing page.
router.get('/account', (req, res) => {
    res.render('landing')
});

module.exports = router;

// throws 'cannot get /login' error until we get withAuth figured out.