const router = require('express').Router();
const { Schedule } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newSchedule = await Schedule.create({
            ...req.body,
            userId: req.session.userId,
        });
        res.json(newSchedule);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;