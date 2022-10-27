const router = require('express').Router();

const apiRoutes = require('./api');
const dogRoutes = require('./api/dog-routes');
const userRoutes = require('./api/user-routes');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;

// from here, anytime you have your base name /api forward to api routes.
//