const router = require('express').Router();
const { Dog, Reservations } = require("../../models");

router.get('/', async (req, res) => {
	try {
			const dogData = await Dog.findAll({
					include: [{model: Reservations}],
			});
			console.log(dogData);
			res.status(200).json(dogData);
	} catch (err) {
		console.log(err);
			res.status(500).json(err);
	}  
});

router.post('/', async (req, res) => {
	try {
			console.log(req.body);
			const dogData = await Dog.create(req.body);
			res.status(200).json({ msg: "Your dog has been created!",
		dogData});
	} catch (err) {
		res.status(400).json(err);
	}
});


module.exports = router;