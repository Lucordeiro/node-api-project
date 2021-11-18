'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('challenge', 'postgres', 'toor', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  define: {
    underscored: true
  }
});
module.exports = sequelize;
/*
class Database{
    constructor(){
      this.host = 'localhost',
      this.port = 5432,
      this.dialect = 'postgres'
    }
    getInstance(){
        try{
          const sequelize = new Sequelize('challenge', 'postgres', 'toor', {
            host: 'localhost',
            port: 5432,
            dialect: 'postgres',
            
          });
        }catch(error){
            console.log(error)
        }
        return sequelize;
    }
}*/