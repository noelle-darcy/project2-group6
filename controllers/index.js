const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api/index');

router.use('/api', apiRoutes);
const apiRoutes = require("./api");
const dashboardRoutes = require('./dashboardRoutes');

// // Renders Landing.handlebars when user navigates to root '/'. 
// router.get('/', (req,res) => {
//     res.render('landing');
// });

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dahboard', dashboardRoutes);

router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;