const { Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

// create our dog model
class Dog extends Model {}

Dog.init({
	dogName: {
		type: Datatypes.STRING,
		allowNull: false,
	},
	dogBreed: {
		type: Datatypes.STRING,
		allowNull: false,
	},
	dogSex: {
		type: Datatypes.ENUM('male', 'female'),
		allowNull: false,
	},
	dogAge: {
		type: Datatypes.INTEGER,
		allowNull: false,
	},
	dogWeight: {
		type: Datatypes.INTEGER,
		allowNull: false,
	},
	dogVet: {
		type: Datatypes.STRING,
		allowNull: false,
	},
	dogConditions: {
		type: Datatypes.STRING,
		allowNull: false,
	}
})

module.exports = Dog;