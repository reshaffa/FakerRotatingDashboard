const Sequelize = require('sequelize');
const db = require('../config/database');

const Users = db.define('users', {
  nip: {
    type: Sequelize.STRING
  },
  name : {
    type : Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.SMALLINT
  },
  role: {
    type: Sequelize.STRING
  }
})

module.exports = Users;