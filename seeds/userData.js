// fake User data to test with. 

const { User } = require('../models');

const userData = [
    {
        username: 'Noelle',
        email: 'noelle@gmail.com',
        password: '123456'
    },
    {
        username: 'Wendy',
        email: 'wendy@gmail.com',
        password: '123456'
    },    
    {
        username: 'Troy',
        email: 'troy@gmail.com',
        password: '123456'
    },    
    {
        username: 'Jason',
        email: 'jason@gmail.com',
        password: '123456'
    },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;