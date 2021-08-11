'use strict';

const express=require('express');
const router=express.Router();
const {clothes}=require('../models/index');
///////////////////////////////////////
router.get('/clothes',getclothes);
router.get('/clothes/:id', getOneOfclothes);
router.post('/clothes',createclothes);
router.put('/clothes/:id', updateclothes);
router.delete('/clothes/:id', deleteclothes);
///////////////////////////////////////
async function getclothes(req,res){
    //alldata for clothes
    let clothess=await clothes.findAll();
    res.status(200).json(clothess);
}
//////////////////////////////////////
async function getOneOfclothes(req,res){
    let id=parseInt(req.params.id);
    let oneclothes= await clothes.findOne({where:{id:id}});
    res.status(200).json(oneclothes);
}
//////////////////////////////////////
async function createclothes(req,res){
    let newclothes=req.body;
    let createdclothes= await clothes.create(newclothes);
    res.status(200).json(createdclothes);
}
//////////////////////////////////////



async function updateclothes(req, res) {
    let id=parseInt(req.params.id);
    let obj = req.body;
    // find the person
    let found = await clothes.findOne({where:{id:id}});
    // update the person + save
    let updatedclothes= await found.update(obj);
    res.status(200).json(updatedclothes);
}




//////////////////////////////////////
async function deleteclothes(req,res){
    let id =parseInt(req.params.id);
    let deletedclothes = await clothes.destroy({where: {id: id}});
    res.status(204).json(deletedclothes);
    
}
//////////////////////////////////////
module.exports=router;
/////////////////////////////////////


