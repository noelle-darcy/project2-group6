const { Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

// create our reservations model
class Reservations extends Model {}

Reservations.init({
	dogName: {
        type: Datatypes.INTEGER,
        allowNull: false,
    },
    apptType: {
        //daycare, boarding, grooming
        type: Datatypes.STRING, 
        allowNull: false,
    },
    groomingAddon: {
        //if they added grooming to daycare or boarding session
        type: Datatypes.STRING, 
        allowNull: true,
    },
    groomingSession: {
        //full groom, luxury bath, basic bath
        type: Datatypes.STRING, 
        allowNull: true,
    },
    additionalGrooming: {
        //any of the grooming add-ons to a grooming session
        type: Datatypes.STRING, 
        allowNull: true,
    },
    dropOffDate: {
        type: Datatypes.DATE,
        allowNull: false,
    },
    pickUpDate: {
        type: Datatypes.DATE,
        allowNull: false,
    },
})

module.exports = Reservations;