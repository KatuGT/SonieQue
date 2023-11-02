import { connection } from "../database/connection";
import { Notice } from "./notice";

const { DataTypes } = require('sequelize');

export const Category = connection.define('categories', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
},  {
  timestamps: true
});

Category.hasMany(Notice, {
  foreignKey: 'categoryId',
  sourceKey: 'id'
});

Notice.belongsTo (Category, {
  foreignKey: 'categoryId',
  targetKey: 'id'
});