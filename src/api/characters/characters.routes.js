const express = require('express');
const Character = require('./modelCharacters/modelCharacters');
const router = express.Router();

router.get("/", async(req, res) => {
    try{
        const allCharacters = await Character.find();
        return res.status(200).json(allCharacters)
    } catch(error){
        return res.status(500).json('Error en el servidor')
    }
});

router.get('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const characterToFind = await Character.findById(id);
        return res.status(200).json(characterToFind);
    } catch(error){
        return res.status(500).json(error);
    }
})

router.post('/create', async(req, res) => {
    try{
        const character = req.body;
        const newCharacter = new character(character);
        console.log(newCharacter);
        const created = await newCharacter.save();
        return res.status(201).json(created)

    } catch(error){ 
        return res.status(500).json("Error al crear personaje")

    }
})

router.delete("/delete/:id", async(req, res)=> {
    try{
        const id = req.params.id;
        await Character.findByIdAndDelete(id);
        return res.status(200).json("Se eliminó el personaje")
    } catch(error){
        return res.status(500).json("Error al eliminar personaje")
    }
})

module.exports= router