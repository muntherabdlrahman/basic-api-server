'use strict';

const POSTGRES_URI="postgresql://localhost:8000/testing";
const {Sequelize, DataTypes}=require('sequelize');
const food=require('./food.model');
// const clothes=require('./clothes.model');

let sequelize= new Sequelize(POSTGRES_URI,{});

module.exports={
    food: food(sequelize,DataTypes),
    db:sequelize
}


