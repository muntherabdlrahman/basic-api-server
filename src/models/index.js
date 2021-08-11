'use strict';


//postgresql://snake:snake1337@localhost:5432/discord
const POSTGRES_URI="postgres://localhost:5432/food";
const {Sequelize, DataTypes}=require('sequelize');
const food=require('./food.model');
const clothes=require('./clothes.model');

let sequelize= new Sequelize(POSTGRES_URI,{});

module.exports={
    food: food(sequelize,DataTypes),
    clothes: clothes(sequelize,DataTypes),


    db:sequelize
}


