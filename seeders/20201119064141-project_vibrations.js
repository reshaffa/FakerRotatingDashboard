'use strict';
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const moment = require('moment');
const faker = require('faker');
const XLSX = require('xlsx');

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
    const directoryPath = path.join(__dirname, 'uploads/APR/');
    await fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        let upload_id = 0
        files.forEach(function (file) {
          upload_id++
          var arrayBuffer = fs.readFileSync(directoryPath+file);
          const wbook = XLSX.read(arrayBuffer, { type : 'buffer'})
          const wbookName = wbook.SheetNames[0];
          const wsheet = wbook.Sheets[wbookName];

          const data = XLSX.utils.sheet_to_json(wsheet,  {raw: false});
          
          let temp = []
          data.map((el) => {
              
              let area_id = 0
              _.filter(areas, function(a){
                if(a.name == el.__EMPTY_5) area_id = a.id
              })

              let compare_date =  (_.isEmpty(el.__EMPTY_6) ? null : el.__EMPTY_6.split('/'))
              let day = (_.isEmpty(el.__EMPTY_6) ? null : parseInt(compare_date[1]));
              let month = (_.isEmpty(el.__EMPTY_6) ? null : parseInt(compare_date[0]));
              let year = (_.isEmpty(el.__EMPTY_6) ? null : parseInt(compare_date[2]));
              let is_compared = (_.isEmpty(el.__EMPTY_6) ? null : day.toString()+"-"+month.toString()+"-"+year.toString());
              let last_date = (_.isEmpty(el.__EMPTY_6) ? null : moment(is_compared.toString()).format('YYYY-MM-DD'));
              
              let vib_max = (_.isEmpty(el.__EMPTY_31) || el.__EMPTY_31.trim() == "" ? 0 : el.__EMPTY_31.toString().replace(" (g)",""))
              let acc_max = (_.isEmpty(el.__EMPTY_32) || el.__EMPTY_32.trim() == "" ? 0 : el.__EMPTY_32.toString().replace(" (g)",""))
              let max_level = (_.isEmpty(el.__EMPTY_33) || el.__EMPTY_33.trim() == "" ? 0 : el.__EMPTY_33.toString().replace(" (g)",""))

              let actual_vib = (
                  el.__EMPTY_38 == "A" && el.__EMPTY_39 == "D" ? parseFloat(vib_max) : 
                  el.__EMPTY_38 == "N" && el.__EMPTY_39 == "A" || el.__EMPTY_39 == "D", el.__EMPTY_39 ? parseFloat(acc_max) :
                  el.__EMPTY_38 == "N" && el.__EMPTY_39 == "N" ? parseFloat(max_level) : 0
              )

              temp.push({
                  tag_no : el.__EMPTY_2,
                  user_id : faker.random.number({min: 1, max: 10}),
                  area_id : area_id,
                  upload_id : upload_id,
                  last_date : (_.isDate(el.__EMPTY_6) ? last_date : null),
                  dvr_ob : (_.isEmpty(el.__EMPTY_13) ? 0 : parseFloat(el.__EMPTY_13)),
                  dvr_obv : (_.isEmpty(el.__EMPTY_14) ? 0 : parseFloat(el.__EMPTY_14)),
                  dvr_obh : (_.isEmpty(el.__EMPTY_15) ? 0 : parseFloat(el.__EMPTY_15)),
                  dvr_ib : (_.isEmpty(el.__EMPTY_16) ? 0 : parseFloat(el.__EMPTY_16)),
                  dvr_ibv : (_.isEmpty(el.__EMPTY_17) ? 0 : parseFloat(el.__EMPTY_17)),
                  dvr_ibh : (_.isEmpty(el.__EMPTY_18) ? 0 : parseFloat(el.__EMPTY_18)),
                  dvr_a : (_.isEmpty(el.__EMPTY_19) ? 0 : parseFloat(el.__EMPTY_19)),
                  dvn_ob : (_.isEmpty(el.__EMPTY_20) ? 0 :parseFloat( el.__EMPTY_20)),
                  dvn_obv : (_.isEmpty(el.__EMPTY_21) ? 0 : parseFloat(el.__EMPTY_21)),
                  dvn_obh : (_.isEmpty(el.__EMPTY_22) ? 0 : parseFloat(el.__EMPTY_22)),
                  dvn_ib : (_.isEmpty(el.__EMPTY_23) ? 0 : parseFloat(el.__EMPTY_23)),
                  dvn_ibv : (_.isEmpty(el.__EMPTY_24) ? 0 : parseFloat(el.__EMPTY_24)),
                  dvn_ibh : (_.isEmpty(el.__EMPTY_25) ? 0 : parseFloat(el.__EMPTY_25)),
                  dvn_a : (_.isEmpty(el.__EMPTY_26) ? 0 : parseFloat(el.__EMPTY_26)),
                  dvr_max : (_.isEmpty(vib_max) ? 0 : parseFloat(vib_max)),
                  dvn_max : (_.isEmpty(acc_max) ? 0 : parseFloat(acc_max)),
                  max_level : (_.isEmpty(max_level) ? 0 : parseFloat(max_level)),
                  actual_vib : parseFloat(actual_vib),
                  position : (_.isEmpty(el.__EMPTY_37) || el.__EMPTY_37.trim() =="" ? "-" : el.__EMPTY_37),
                  vib_status : (_.isEmpty(el.__EMPTY_38) || el.__EMPTY_38.trim() =="" ? "-" : el.__EMPTY_38),
                  acc_status : (_.isEmpty(el.__EMPTY_39) || el.__EMPTY_39.trim() =="" ? "-" : el.__EMPTY_39),
                  status : (_.isEmpty(el.__EMPTY_40) || el.__EMPTY_40.trim() =="" ? "-" : el.__EMPTY_40),
                  indikasi : (_.isEmpty(el.__EMPTY_67) || el.__EMPTY_67.trim() =="" ? "-" : el.__EMPTY_67),
                  type : (_.isEmpty(el.__EMPTY_68) || el.__EMPTY_68.trim() == "" ? "-" : el.__EMPTY_68),
                  remark : (_.isEmpty(el.__EMPTY_69) || el.__EMPTY_69.trim() =="" ? "-" : el.__EMPTY_69),
                  saran : (_.isEmpty(el.__EMPTY_70) || el.__EMPTY_70.trim() =="" ? "-" : el.__EMPTY_70)
              })
          })
          temp.splice(0,5)
          console.log("You insert "+temp.length+" data")
          queryInterface.bulkInsert('project_vibrations', temp, {});
        });
    });
    //await queryInterface.bulkInsert('project_vibrations', objects, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('project_vibrations',null, {});
  }
};
