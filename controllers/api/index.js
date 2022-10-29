const router = require('express').Router();

const apiRoutes = require('./api');
const dogRoutes = require('./dog-routes');
const userRoutes = require('./user-routes');

router.use('/api', apiRoutes);
router.use('/', userRoutes);
router.use('/dog', dogRoutes);

module.exports = router;