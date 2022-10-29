const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our reservations model
class Reservations extends Model { }

Reservations.init(
    {
        dogName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apptType: {
            //daycare, boarding, grooming
            type: DataTypes.STRING,
            allowNull: false,
        },
        groomingAddon: {
            //if they added grooming to daycare or boarding session
            type: DataTypes.STRING,
            allowNull: true,
        },
        groomingSession: {
            //full groom, luxury bath, basic bath
            type: DataTypes.STRING,
            allowNull: true,
        },
        additionalGrooming: {
            //any of the grooming add-ons to a grooming session
            type: DataTypes.STRING,
            allowNull: true,
        },
        dropOffDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        pickUpDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        dog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'dog',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Reservations'
    }
);

module.exports = Reservations;