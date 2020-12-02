const Sequelize = require('sequelize');
const db = require('../config/database');

const Areas = db.define('areas', {
  name : {
    type : Sequelize.STRING
  },
  area_type : {
    type : Sequelize.INTEGER
  }
});

module.exports = Areas;