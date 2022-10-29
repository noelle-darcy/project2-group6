const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {}

Reviews.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		reviewerName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		review: {
			type: DataTypes.STRING,
			allowNull: false,
			len: [2],
		},
		  // this is here in case we decide to link to another model, else we can lose it. 'user_id' may change names.
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'user',
				key: 'id',
			},
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