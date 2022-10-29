const User = require('./User');
const Dog = require('./Dog');
const Reservations = require('./Reservations');

User.hasMany(Dog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE', // delete user's dogs if user deleted.
});

Dog.belongsTo(User, {
    foreignKey: 'user_id',
});

Dog.hasMany(Reservations, {
    foreignKey: 'dog_id',
    onDelete: 'CASCADE',  // delete dog's reservations if dog is deleted. 
});

Reservations.belongsTo(Dog, {
    foreignKey: 'dog_id',
});

// Can add more connections if we need right here.

module.exports = { User, Dog, Reservations };