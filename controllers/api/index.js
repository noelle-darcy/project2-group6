const router = require('express').Router();

const apiRoutes = require('./api');
const dogRoutes = require('./dog-routes');
const userRoutes = require('./user-routes');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;