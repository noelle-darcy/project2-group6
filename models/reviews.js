const { Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {}

Reviews.init({
	reviewerName: {
		type: Datatypes.STRING,
		allowNull: false,
	},
	review: {
		type: Datatypes.STRING,
		allowNull: false,
		len: [4]
	}
})

module.exports = Reviews;