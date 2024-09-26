'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize,DataTypes} = require('sequelize');
const users = require("../persistence/entity/Users");
const e = require("express");
require('dotenv').config();

//folder name
const entity = path.join(__dirname, '../persistence/entity');

//environment
const env = process.env.NODE_ENV || 'dev';
const config = require('../config/db.config.js')[env];

let db = {};

const sequelize = new Sequelize(
    config.database, config.user, config.password, {
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        logging: true,
    });

// Read all files in the entity directory and import them as models
fs.readdirSync(entity)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        // Import model file
        const model = require(path.join(entity, file))(sequelize, DataTypes);
        db[model.name] = model;
    });

Object.keys(db)
    .forEach(
        modelName => {
            if (db[modelName].associate) {
                db[modelName].associate(db);
            }
        });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;