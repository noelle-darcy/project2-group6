const router = require('express').Router();
//DO WE NEED SEQUELIZE HERE?? const sequelize = require(' blah blah)
const { User, Dog, Reservations, Reviews } = require("../models");

// Get all Dogs for a User.
router.get('/', (req, res) => {
    Dog.findAll({
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
            const dogs = dbDogData.map((dog) => dog.get({ plain: true }))
            res.render("main", {
                dogs,
                loggedIn: req.session.loggedIn
            });
        })    
        .catch ((err) => {
        res.status(500).json(err);
    });
})

// Get all Reservations for a Dog.
router.get('/', async (req, res) => {
    try {
        const resData = await Reservations.findAll({
            include: [Dog],
        });
        const reservations = resData.map((reservation) => reservation.get({ plain: true }));
        res.render('home'); // should be account page?
    } catch (err) {
        res.status(500).json(err);
    }
});

// single appointment gets need more to specify appointment type within.

// Get a Single Grooming Appointment
router.get('/groomingBooking:apptType', async (req, res) => {
    try {
        const resData = await Reservations.findAll({
            include: [Dog],
        });
        const reservations = resData.map((reservation) => reservation.get({ plain: true }));
        res.render('groomingBooking'); 
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a Single Boarding Appointment
router.get('/boardingBooking:apptType', async (req, res) => {
    try {
        const resData = await Reservations.findAll({
            include: [Dog],
        });
        const reservations = resData.map((reservation) => reservation.get({ plain: true }));
        res.render('boardingBooking'); 
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a Single Daycare Appointment
router.get('/daycareBooking:apptType', async (req, res) => {
    try {
        const resData = await Reservations.findAll({
            include: [Dog],
        });
        const reservations = resData.map((reservation) => reservation.get({ plain: true }));
        res.render('daycareBooking'); 
    } catch (err) {
        res.status(500).json(err);
    }
});

// Once logged in, redirect to Account page.
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    res.render("signup");
});

router.get('/dog/:id', (req, res) => {
    Dog.findOne({
        where: {
            id: req.params.id
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
            if (!dbDogData){
                res.status(404).json({ message: "Dog not found"});
                return;
            }
            const dogs = dbDogData.get({ plain: true });
            res.render("dashboard", {
                dogs,
                loggedIn: req.session.loggedIn
            });
        })    
        .catch ((err) => {
        res.status(500).json(err);
    });
})

module.exports = router;