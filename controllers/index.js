const router = require('express').Router();
const userRoutes = require('./api/user-routes');
const dogRoutes = require('./api/dog-routes');
const resRoutes = require('./api/res-routes');
const revRoutes = require('./api/rev-routes');
const schedRoutes = require('./api/sched-routes');

// Anything from the corresponding api route gets another prefix added on.
// ex: localhost:3001/api/user
router.use('/user', userRoutes);
router.use('/dog', dogRoutes);
// router.use('/reservation', resRoutes);
// router.use('/review', revRoutes);
// router.use('/schedule', schedRoutes);


module.exports = router;