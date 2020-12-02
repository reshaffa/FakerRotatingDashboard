const Sequelize = require('sequelize');
const db = require('../config/database');

const Vibrations = db.define('project_vibrations', {
    tag_no: {
        type: Sequelize.STRING
      },
      user_id : {
        type : Sequelize.INTEGER
      },
      area_id : {
        type : Sequelize.INTEGER
      },
      upload_id :{
        type : Sequelize.INTEGER,
      },
      last_date : {
        type : "DATE"
      },
      dvr_ob: {
        type: Sequelize.FLOAT
      },
      dvr_obv: {
        type: Sequelize.FLOAT
      },
      dvr_obh: {
        type: Sequelize.FLOAT
      },
      dvr_ib: {
        type: Sequelize.FLOAT
      },
      dvr_ibv: {
        type: Sequelize.FLOAT
      },
      dvr_ibh: {
        type: Sequelize.FLOAT
      },
      dvr_a: {
        type: Sequelize.FLOAT
      },
      dvn_ob: {
        type: Sequelize.FLOAT
      },
      dvn_obv: {
        type: Sequelize.FLOAT
      },
      dvn_obh: {
        type: Sequelize.FLOAT
      },
      dvn_ib: {
        type: Sequelize.FLOAT
      },
      dvn_ibv: {
        type: Sequelize.FLOAT
      },
      dvn_ibh: {
        type: Sequelize.FLOAT
      },
      dvn_a: {
        type: Sequelize.FLOAT
      },
      dvr_max: {
        type: Sequelize.FLOAT
      },
      dvn_max: {
        type: Sequelize.FLOAT
      },
      actual_vib : {
        type : Sequelize.FLOAT
      },
      max_level:{
        type: Sequelize.STRING
      },
      position:{
        type : Sequelize.STRING
      },
      type : {
        type : Sequelize.STRING
      },
      vib_status : {
        type : Sequelize.STRING
      },
      acc_status : {
        type : Sequelize.STRING,
      },
      status : {
        type: Sequelize.STRING
      },
      indikasi: {
        type: Sequelize.TEXT
      },
      remark: {
        type: Sequelize.TEXT
      },
      saran: {
        type: Sequelize.TEXT
      }
});

module.exports = Vibrations;