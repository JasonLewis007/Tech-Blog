const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'jlewis001',
    email: 'jason@test.com',
    password: 'password123'
  },
  {
    username: 'kcollins31',
    email: 'kelsey@test.com',
    password: 'password123'
  },
  {
    username: 'connor11',
    email: 'connor@test.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;