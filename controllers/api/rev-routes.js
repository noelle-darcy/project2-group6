const router = require('express').Router();
const { Reviews } = require('../../models');
const sequelize = require("../../config/connection");


router.post('/', async (req, res) => {
    if (req.session) {
        Review.create({
            review_text: req.body.review_text,
            user_id: req.session.user_id,
            
        })
        .then((dbReviewData) => 
            res.json(dbReviewData))
        .catch ((err) => {
        res.status(500).json(err);
        });
    }   
});

router.get("/", (req, res) => {
    Reviews.findAll()
        .then((dbReviewData) => res.json(dbReviewData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete("/:id", (req, res) => {
    Review.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((dbReviewData) => {
            if (!dbReviewData) {
                res.status(404).json({ message: "No post found"});
                return;
            }
            res.json(dbReviewData);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router;