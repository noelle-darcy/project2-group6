const router = require('express').Router();
const { Reviews } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newReview = await Review.create({
            ...req.body,
            userId: req.session.userId,
        });
        res.json(newReview);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;