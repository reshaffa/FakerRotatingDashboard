const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../config/database');

const Uploads = db.define('uploads', {
  filename : {
    type : Sequelize.STRING
  },
  week : {
    type : Sequelize.INTEGER
  },
  month : {
    type : Sequelize.INTEGER
  },
  year : {
      type : Sequelize.INTEGER
  },
  upload_type : {
      type : Sequelize.INTEGER
  }
});

module.exports = Uploads;