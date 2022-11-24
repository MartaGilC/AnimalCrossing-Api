const express = require("express");
const Edition = require("../editions/modelEdition/model.editions");
const router = express.Router();

router.get('/', async(req, res) => {
    try{
        const allEditions = await Edition.find();
        return res.status(200).json(allEditions)
    }catch(error){
        return res.status(500).json("Error en el servidor")
    }
});

router.get('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const editionsToFind = await Edition.findById(id);
        return res.status(200).json(editionsToFind);
    } catch(error){
        return res.status(500).json(error);
    }
})

module.exports = router