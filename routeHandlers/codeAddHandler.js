const express = require('express');
const router = express.Router();
const CodeModel = require('../schemaModels/codeAddSchemaModel');


// Get components by category
// Get components by category
router.get('/:reqCategory', async(req, res)=>{
    try{
        const result = await CodeModel.find({category: req.params.reqCategory}).sort({id: 1});
        res.status(200).send(result);

    }catch(err){
        res.status(500).send(err);
    }
})


// Create components by category
router.post('/', async(req, res)=>{
    try{
        const {id, category} = req.body;
        
        const result = await CodeModel.findOneAndUpdate({ id: id, category: category},
            { $set: req.body }, // Update data
            { upsert: true, new: true } // Create if not found, return new document
        )
        res.status(200).send(result);

    }catch(err){
        res.status(500).send(err);
    }
})


// Delte by category and id 
router.delete('/', async(req, res)=>{
    try{
        const {id, category} = req.body;
        console.log(id, category)
        const result = await CodeModel.deleteOne({category: category, id: id});
        res.status(200).send(result);

    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;