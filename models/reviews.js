const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {}

Reviews.init(
	{
		reviewerName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		review: {
			type: DataTypes.STRING,
			allowNull: false,
			len: [4]
		},
	},
	{
		sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Reviews',
	},
);

module.exports = Reviews;