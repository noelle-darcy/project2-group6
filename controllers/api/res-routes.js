const router = require('express').Router();
const { Reservation } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newRes = await Reservation.create({
            ...req.body,
            dogId: req.session.dogId,
        });
        res.json(newRes);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;