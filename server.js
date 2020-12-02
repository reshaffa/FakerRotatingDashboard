require('dotenv').config();
const express = require('express');
const path = require('path');

// database initiations
const db = require('./config/database');
db.authenticate()
    .then( () => console.log("Server Connected !"))
    .catch(err => console.log("Error " + err))

const app = express();
app.listen(
    process.env.APP_PORT, () => {
        console.log(`Server start at port : ${process.env.APP_PORT}`)
    }
);