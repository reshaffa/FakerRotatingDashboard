'use strict';
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const moment = require('moment');
const faker = require('faker');
const XLSX = require('xlsx');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('uploads',data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('uploads',null, {});
  }
};
