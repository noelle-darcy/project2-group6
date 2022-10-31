const router = require('express').Router();
const { Dog, User, Reservations } = require("../../models");
//DO WE NEED SEQUELIZE HERE?? const sequelize = require(' blah blah)

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

router.post('/', (req, res) => {
	Dog.create({
		dogName: req.body.dogName,
        dogBreed: req.body.dogBreed,
    	dogSex:	req.body.dogSex,
        dogAge: req.body.dogAge,
        dogWeight: req.body.dogWeight,
        dogVet: req.body.dogVet,
		dogConditions: req.body.dogConditions,
		user_id: req.body.user_id,
	}) 
		.then((dbDogData) => res.json(dbDogData))
		.catch ((err) => {
		res.status(500).json(err);
	});
});

router.put('/reservation', (req,res) => {
	Reservations.create({
		user_id: req.body.user_id,
		dog_id: req.body.dog_id,
		dropOffDate: req.body.dropOffDate,
	})
	.then(() => {
		return Dog.findOne({
			where: {
				id: req.body.dog_id
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
		})
		.then(dbDogData => res.json(dbDogData))
		.catch(err => {
			console.log(err);
			res.status(400).json(err);
		});
	})
})

//DELETE DOG
router.delete("/:id", (req,res) => {
	Dog.destroy({
		where: {
			id: req.params.id,
		},
	})
	.then((dbDogData) => {
		if (!dbDogData) {
			res.status(404).json({ message: "No dog found with this id." });
			return;
		}
		res.json(dbDogData);
	})
	.catch((err) => {
		console.log(err);
		res.status(500).json(err);
	});
});


module.exports = router;

//FOR LATER
//router.put("/:id")....no dogs found 
