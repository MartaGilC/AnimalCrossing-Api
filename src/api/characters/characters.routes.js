const express = require('express');
const Character = require('./modelCharacters/modelCharacters');
const router = express.Router();

router.get('/', async(req, res) => {
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
        
        const newCharacter = new Character(req.body);
        //console.log("nuevo personaje =>", newCharacter)
        const created = await newCharacter.save();
        
        return res.status(201).json(created)
        
    } catch(error){ 
        return res.status(500).json("Error al crear personaje")

    }
})

router.delete('/delete/:id', async(req, res)=> {
    try{
        const id = req.params.id;
        await Character.findByIdAndDelete(id);
        return res.status(200).json("Se eliminó el personaje")
    } catch(error){
        return res.status(500).json("Error al eliminar personaje")
    }
})

router.put('/edit/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const character = req.body;
        const characterModify = new Character(character);
        characterModify._id = id;
        const characterUpdated = await Character.findByIdAndUpdate(id, characterModify);
        return res.status(200).json({
            mensaje:"Se ha editado con éxito el personaje",
            characterModificado:  characterUpdated,
        })
    }catch(error){
        return res.status(500).json("No se pudo editar el personaje")
    }
})

module.exports= router