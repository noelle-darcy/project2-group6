// fake User data to test with. 

const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: 'Noelle',
    },
    {
        id: 2,
        username: 'Wendy',
    },    
    {
        id: 3,
        username: 'Troy',
    },    
    {
        id: 4,
        username: 'Jason',
    },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;