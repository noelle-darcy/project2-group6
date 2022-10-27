require('dotenv').config();

const Sequelize = require('sequelize');

// create connection to our db
const sequelize = new Sequelize (
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    });

module.exports = sequelize;

// jawsdb_url for deploying to heroku instead of mutteldb_url