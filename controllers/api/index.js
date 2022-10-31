const router = require('express').Router();


const dogRoutes = require('./dog-routes');
const userRoutes = require('./user-routes');
const reviewRoutes = require('./rev-routes');

router.use('/user', userRoutes);
router.use('/dog', dogRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;