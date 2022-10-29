const router = require('express').Router();
const { User, Dog, Reservations, Reviews, Schedule } = require("../models");

// Get all Dogs for a User.
router.get('/', async (req, res) => {
    try {
        const dogData = await Dog.findAll({
            include: [User],
        });
        const dogs = dogData.map((dog) => dog.get({ plain: true }));
        res.render('home'); // should be account page?
    } catch (err) {
        res.status(500).json(err);
    }
});

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
        res.redirect('/account');
        return;
    }
    res.render('login');
});


module.exports = router;