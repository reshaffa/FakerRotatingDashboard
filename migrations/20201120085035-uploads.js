'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('uploads', {
      id : {
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        type : Sequelize.INTEGER
      },
      filename : {
        allowNull : false,
        type : Sequelize.STRING
      },
      week : {
        allowNull : false,
        type : Sequelize.STRING
      },
      year : {
        allowNull : false,
        type : Sequelize.INTEGER
      },
      upload_type : {
        allowNull : false,
        type : Sequelize.INTEGER
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
    await queryInterface.dropTable('uploads');
  }
};
