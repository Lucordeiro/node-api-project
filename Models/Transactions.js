const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./../Config/db');
class Transactions extends Model{}
Transactions.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    origin_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destiny_id: {
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
module.exports = Transactions;