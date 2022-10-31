const router = require('express').Router();
//DO WE NEED SEQUELIZE HERE?? const sequelize = require(' blah blah)
const { User, Dog, Reservations, Reviews } = require("../models");
const withAuth = require("../utils/auth");

router.get('/', withAuth, (req,res) => {
    Dog.findAll({
        where: {
            user_id: req.session.user_id,
        },
        attributes: [
            "id",
            "dogName",
            "dogBreed",
            "dogSex",
            "dogAge",
            "dogWeight",
            "dogVet",
            "dogConditions",
        ],
        include: [
            {
                model: User,
                attributes: ["username"],
            },
            {
                model: Reservations,
                attributes: ["dropOffDate"],
            },
        ],
    })
    .then(dbDogData => {
        const dogs = dbDogData.map(dog => dog.get({ plain: true }))
        res.render("dashboard", {
            dogs,
            loggedIn: true
        });
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = router;

//For later:  
//router.get('/edit/:id')
//router.get('/edituser')