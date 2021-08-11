'use strict';

const express=require('express');
const router=express.Router();
const {food}=require('../models/index');
///////////////////////////////////////
router.get('/food',getFood);
router.get('/food/:id', getOneOfFood);
router.post('/food',createFood);
router.put('food/:id', updateFood);
router.delete('/food/:id', deleteFood);
///////////////////////////////////////
async function getFood(req,res){
    //alldata for food
    let foods=await food.findAll();
    res.status(200).json(foods);
}
//////////////////////////////////////
async function getOneOfFood(req,res){
    const id=parseInt(req.params.id);
    let oneFood=await food.findOne({where:{id:id}});
    res.status(200).json(oneFood);
}
//////////////////////////////////////
async function createFood(req,res){
    let newFood=req.body;
    let oneFood= await food.createFood(newFood);
    res.status(200).json(oneFood);
}
//////////////////////////////////////
async function updateFood(req,res){
    let id=parseInt(req.params.id);
    let object=req.body;
    //find the oneFood
    let foundTheFood=await food.findOne({where:{id:id}});
    //update&save
    let updatedFood= await foundTheFood.updateFood(object);
    res.status(200).json(updatedFood);
}
//////////////////////////////////////
async function deleteFood(req,res){
    let id =parseInt(req.params.id);
    let deletedFood = await food.destroy({where: {id: id}});
    res.status(204).json(deletedFood);
    
}
//////////////////////////////////////
module.exports=router;
/////////////////////////////////////


