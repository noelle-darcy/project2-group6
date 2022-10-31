const User = require('./user');
const Dog = require('./dog');
const Reservations = require('./reservations');
const Reviews = require('./reviews');
// const Schedule = require('./Schedule');

User.hasMany(Dog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE', // delete user's dogs if user deleted.
});

Dog.belongsTo(User, {
    foreignKey: 'user_id',
});

User.belongsToMany(Dog, {
    through: Reservations,
    as: "dropOffDate",
    foreignKey: "dog_id",
});

Dog.belongsToMany(User, {
    through: Reservations,
    as: "appointment_time",
    foreignKey: "dog_id",
});

Dog.hasMany(Reservations, {
    foreignKey: 'dog_id',
    onDelete: 'CASCADE', 
    hooks: true, // delete dog's reservations if dog is deleted. 
});

Reservations.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    hooks: true,
});

Reservations.belongsTo(Dog, {
    foreignKey: 'dog_id',
    onDelete: "CASCADE",
    hooks: true,
});

User.hasMany(Reservations, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    hooks: true,
});

Reviews.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    hooks: true,
});

User.hasMany(Reviews, {
    foreignKey: "reservation_id",
    onDelete: "CASCADE",
    hooks: true,
});
// Can add more connections if we need right here. -- Schedule?? Reviews??

module.exports = { User, Dog, Reservations, Reviews };
//took out Schedule for now