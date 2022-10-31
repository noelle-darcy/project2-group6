const router = require('express').Router();
const homeRoutes = require('./home-routes');

// Renders Landing.handlebars when user navigates to root '/'. 
router.get('/', (req,res) => {
    res.render('landing');
});

router.use('/', homeRoutes);

module.exports = router;