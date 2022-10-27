const { Model, Datatypes, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// create our dog model
class Dog extends Model {}

Dog.init(
	{
	  id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	  },
	  dogName: {
	    type: DataTypes.STRING,
    	allowNull: false,
	  },
	  dogBreed: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  dogSex: {
		type: DataTypes.ENUM('male', 'female'),
		allowNull: false,
	  },
	  dogAge: {
		type: DataTypes.INTEGER,
		allowNull: false,
	  },
	  dogWeight: {
		type: DataTypes.INTEGER,
		allowNull: false,
	  },
	  dogVet: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  dogConditions: {
		type: DataTypes.STRING,
		allowNull: false,
	  }, 
	  user_id: {
		type: DataTypes.INTEGER,
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
      modelName: 'Dog'
    }  
);

module.exports = Dog;