const { Sequelize } = require('sequelize');
import * as pg from 'pg';
const { configs } = require('./configs');

const USER = encodeURIComponent(configs.dbUser);
const PASSWORD = encodeURIComponent(configs.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${configs.dbHost}:${configs.dbPort}/${configs.dbName}`;

export const connection = new Sequelize(URI, {
  dialectModule: pg
});

connection.sync({ alter: false });