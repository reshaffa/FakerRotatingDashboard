'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    let objects = [
      { name : "FOC I", area_type : 0},
      { name : "LOC I", area_type : 0},
      { name : "OM 30", area_type : 0},
      { name : "OM KPC", area_type : 0},
      { name : "OM LOC II", area_type : 0},
      { name : "OM LOC I", area_type : 0},
      { name : "OM FOC I", area_type : 0},
      { name : "OM LPG", area_type : 0},
      { name : "OM FOC II", area_type : 0},
      { name : "OM DRUM PLAN", area_type : 0},
      { name : "UTL I", area_type : 0},
      { name : "OM DERMAGA", area_type : 0},
      { name : "OM UTL I", area_type : 0},
      { name : "OM TELUK PENYU", area_type : 0},
      { name : "KPC", area_type : 0},
      { name : "SRU", area_type : 0},
      { name : "LOC III", area_type : 0},
      { name : "UTL III", area_type : 0},
      { name : "LOC II", area_type : 0},
      { name : "AREA 05", area_type : 0},
      { name : "FOC II A", area_type : 0},
      { name : "FOC II B", area_type : 0},
      { name : "OM LOC III", area_type : 0},
      { name : "UTL II", area_type : 0},
      { name : "OM", area_type : 0},
      { name : "RFCC GTO", area_type : 0},
      { name : "RFCC UTL", area_type : 0},
      { name : "RFCC RCU", area_type : 0},
      { name : "RFCC LEU", area_type : 0},
      { name : "SRU & IPAL", area_type : 0},
      { name : "PLBC UTL III", area_type : 0},
      { name : "PLBC FOC I", area_type : 0},
      { name : "PLBC LN", area_type : 0},
      { name : "OM DERMAGA PLBC", area_type : 0}
    ]
    await queryInterface.bulkInsert('areas', objects , {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('areas', null, {});
  }
};
