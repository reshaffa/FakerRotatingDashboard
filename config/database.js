require('dotenv').config();
module.exports = {
    dialect : 'mssql',
    host : process.env.DBA_HOST,
    port : process.env.DBA_PORT,
    username : process.env.DBA_USER,
    password : process.env.DBA_PASSWORD,
    database : process.env.DBA_SCHEMA,
    define : {
        timestamps : false, // created_at and updated_at
        underscored : true
    },
    dialectOptions : {
        options: { "requestTimeout": 300000 }
    }
}