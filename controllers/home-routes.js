const router = require('express').Router();
const { Dog, Reservations } = require("../models");

router.get('/', async (req, res) => {
    try {
        const dogData = await Dog.findAll({
            include: [Reservations]
        })
        const dogs = dogData.map((dog) => dog.get({ plain: true }));
        res.render('home');
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;