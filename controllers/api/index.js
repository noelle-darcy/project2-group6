const router = require('express').Router();

const dogRoutes = require('./dog-routes');
const userRoutes = require('./user-routes');

router.use('/user', userRoutes);
router.use('/dog', dogRoutes);

module.exports = router;