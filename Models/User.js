const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./../Config/db');
class User extends Model{}
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
      
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false
    }
  },
  {
    sequelize
  });
module.exports = User;