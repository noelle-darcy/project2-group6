const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedDogs = require('./dogData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    
    await seedUsers();
    await seedDogs();

    process.exit(0);
};

seedAll();