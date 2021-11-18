const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./../Config/db');
const db = require('./../Config/db.js');
class Balance extends Model{}
Balance.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
      
    },
  },
  {
    sequelize
  });
module.exports = Balance;