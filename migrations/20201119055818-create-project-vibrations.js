'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('project_vibrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tag_no: {
        allowNull : false,
        type: Sequelize.STRING
      },
      user_id : {
        allowNull : false,
        type : Sequelize.INTEGER
      },
      area_id : {
        allowNull : false,
        type : Sequelize.INTEGER
      },
      upload_id : {
        allowNull : false,
        type : Sequelize.INTEGER
      },
      last_date : {
        allowNull : true,
        type : "DATE"
      },
      dvr_ob: {
        type: Sequelize.FLOAT,
        defaultValue : 0
      },
      dvr_obv: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      dvr_obh: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      dvr_ib: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      dvr_ibv: {
        type: Sequelize.FLOAT,
        defaultValue : 0
      },
      dvr_ibh: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      dvr_a: {
        type: Sequelize.FLOAT,
        defaultValue : 0
      },
      dvn_ob: {
        type: Sequelize.FLOAT,
        defaultValue : 0
      },
      dvn_obv: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      dvn_obh: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      dvn_ib: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      dvn_ibv: {
        type: Sequelize.FLOAT,
        defaultValue : 0
      },
      dvn_ibh: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      dvn_a: {
        type: Sequelize.FLOAT,
        defaultValue : 0
      },
      dvr_max: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      dvn_max: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      actual_vib : {
        type : Sequelize.FLOAT,
        defaultValue: 0
      },
      max_level:{
        type: Sequelize.STRING,
        defaultValue: 0
      },
      position:{
        type : Sequelize.STRING,
        defaultValue: null
      },
      type : {
        type : Sequelize.STRING,
        defaultValue : "-"
      },
      vib_status : {
        allowNull : true,
        type : Sequelize.STRING,
        defaultValue : "-"
      },
      acc_status : {
        allowNull : true,
        type : Sequelize.STRING,
        defaultValue : "-"
      },
      status : {
        allowNull : true,
        type: Sequelize.STRING,
        defaultValue : "-"
      },
      indikasi: {
        type: Sequelize.TEXT,
        defaultValue: "-"
      },
      remark: {
        type: Sequelize.TEXT,
        defaultValue: "-"
      },
      saran: {
        type: Sequelize.TEXT,
        defaultValue: "-"
      },
      created_at: {
        allowNull: false,
        type: 'DATETIME',
        defaultValue : Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: 'DATETIME',
        defaultValue : Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('project_vibrations');
  }
};