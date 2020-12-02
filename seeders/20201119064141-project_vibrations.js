'use strict';
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const moment = require('moment');
const faker = require('faker');
const excelReader = require('read-excel-file/node');
const excelFile = path.join(__dirname, '../uploads/Data tester.xlsx');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let objects = []
    await excelReader(excelFile).then(async (rows) => {
      let areas = [
        { id: 1, name : "FOC I", area_type : 0},
        { id: 2, name : "LOC I", area_type : 0},
        { id: 3, name : "OM 30", area_type : 0},
        { id: 4, name : "OM KPC", area_type : 0},
        { id: 5, name : "OM LOC II", area_type : 0},
        { id: 6, name : "OM LOC I", area_type : 0},
        { id: 7, name : "OM FOC I", area_type : 0},
        { id: 8, name : "OM LPG", area_type : 0},
        { id: 9, name : "OM FOC II", area_type : 0},
        { id: 10, name : "OM DRUM PLAN", area_type : 0},
        { id: 11, name : "UTL I", area_type : 0},
        { id: 12, name : "OM DERMAGA", area_type : 0},
        { id: 13, name : "OM UTL I", area_type : 0},
        { id: 14, name : "OM TELUK PENYU", area_type : 0},
        { id: 15, name : "KPC", area_type : 0},
        { id: 16, name : "SRU", area_type : 0},
        { id: 17, name : "LOC III", area_type : 0},
        { id: 18, name : "UTL III", area_type : 0},
        { id: 19, name : "LOC II", area_type : 0},
        { id: 20, name : "AREA 05", area_type : 0},
        { id: 21, name : "FOC II A", area_type : 0},
        { id: 22, name : "FOC II B", area_type : 0},
        { id: 23, name : "OM LOC III", area_type : 0},
        { id: 24, name : "UTL II", area_type : 0},
        { id: 25, name : "OM", area_type : 0},
        { id: 26, name : "RFCC GTO", area_type : 0},
        { id: 27, name : "RFCC UTL", area_type : 0},
        { id: 28, name : "RFCC RCU", area_type : 0},
        { id: 29, name : "RFCC LEU", area_type : 0},
        { id: 30, name : "SRU & IPAL", area_type : 0},
        { id: 31, name : "PLBC UTL III", area_type : 0},
        { id: 32, name : "PLBC FOC I", area_type : 0},
        { id: 33, name : "PLBC LN", area_type : 0},
        { id: 34, name : "OM DERMAGA PLBC", area_type : 0}
      ]
      // getting date of max week
      let file = JSON.parse(JSON.stringify(rows));
      file.shift();
      
      file.map((el) => {
        
        let area_id = 0
        _.filter(areas, function(a){
          if(a.name == el[5]) area_id = a.id
        })

        //let last_date = JSON.stringify(el[6]);
        let compare_date =  (_.isEmpty(el[6]) ? null : new Date(el[6]))
        let last_date = (_.isDate(compare_date) ? moment(compare_date).format('YYYY-MM-DD'): null);

        let actual_vib = (
          el[38] == "A" && el[39] == "D" ? parseFloat(el[31]) : 
          el[38] == "N" && el[39] == "A" || el[39] == "D", el[39] ? parseFloat(el[32]) :
          el[38] == "N" && el[39] == "N" ? parseFloat(el[33]) : 0
        )

        let tag_no = JSON.stringify(el[2])
        objects.push({
            tag_no : tag_no.toString(),
            area_id : area_id,
            user_id : faker.random.number({min:1, max:10}),
            last_date : last_date,
            dvr_ob : (_.isNull(el[13]) ? 0 : parseFloat(el[13])),
            dvr_obv : (_.isNull(el[14]) ? 0 : parseFloat(el[14])),
            dvr_obh : (_.isNull(el[15]) ? 0 : parseFloat(el[15])),
            dvr_ib : (_.isNull(el[16]) ? 0 : parseFloat(el[16])),
            dvr_ibv : (_.isNull(el[17]) ? 0 : parseFloat(el[17])),
            dvr_ibh : (_.isNull(el[18]) ? 0 : parseFloat(el[18])),
            dvr_a : (_.isNull(el[19]) ? 0 : parseFloat(el[19])),
            dvn_ob : (_.isNull(el[20]) ? 0 :parseFloat( el[20])),
            dvn_obv : (_.isNull(el[21]) ? 0 : parseFloat(el[21])),
            dvn_obh : (_.isNull(el[22]) ? 0 : parseFloat(el[22])),
            dvn_ib : (_.isNull(el[23]) ? 0 : parseFloat(el[23])),
            dvn_ibv : (_.isNull(el[24]) ? 0 : parseFloat(el[24])),
            dvn_ibh : (_.isNull(el[25]) ? 0 : parseFloat(el[25])),
            dvn_a : (_.isNull(el[26]) ? 0 : parseFloat(el[26])),
            dvr_max : (_.isNull(el[31]) ? 0 : parseFloat(el[31])),
            dvn_max : (_.isNull(el[32]) ? 0 : parseFloat(el[32])),
            max_level : (_.isNull(el[33]) ? 0 : parseFloat(el[33])),
            actual_vib : actual_vib,
            position : (_.isEmpty(el[37]) ? "-" : el[37]),
            vib_status : (_.isEmpty(el[38]) ? "-" : el[38]),
            acc_status : (_.isEmpty(el[39]) ? "-" : el[39]),
            status : (_.isEmpty(el[40]) ? "-" : el[40]),
            indikasi : (_.isEmpty(el[67]) ? "-" : el[67]),
            type : el[68],
            remark : (_.isEmpty(el[69]) ? "-" : el[69]),
            saran : (_.isEmpty(el[70]) ? "-" : el[70])
          })
      })
    })
    console.log(objects)
    //await queryInterface.bulkInsert('project_vibrations', objects, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('project_vibrations',null, {});
  }
};
