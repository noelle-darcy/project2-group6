const router = require('express').Router();
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

// Create a new User.
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json({ msg: "Your account has been created.", userData });
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;

// throws 'cannot get /login' error until we get withAuth figured out.