require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('techblog_db', 'root', 'Lena2008!', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;