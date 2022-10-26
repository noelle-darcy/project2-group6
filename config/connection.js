const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.MUTTELDB_URL
  ? new Sequelize(process.env.MUTTELDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3001
    });

module.exports = sequelize;

