import { connection } from "../database/connection";

const { DataTypes } = require('sequelize');

export const Notice = connection.define('notices', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true
  },
},  {
  timestamps: true
});