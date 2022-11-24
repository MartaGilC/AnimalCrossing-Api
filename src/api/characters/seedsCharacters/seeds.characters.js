const mongoose = require('mongoose');
const Character = require("../modelCharacters/modelCharacters");
const db = require("../../../utils/database/db")
const characters = [
    {
        name: "Tom Nook",
        genre: "Male",
        birthday: "30 de Mayo",
        img: "https://i.pinimg.com/564x/1e/e4/53/1ee453e6d36c6727ecce47995fc6f73c.jpg" 
    },
    {
        name: "Juliana",
        genre: "Female",
        birthday: "5 de Mayo",
        img: "https://i.pinimg.com/564x/9d/ee/e0/9deee04e508c3ebf51711c9c97208557.jpg" 
    },
    {
        name: "Canela",
        genre: "Female",
        birthday: "20 de Diciembre",
        img: "https://i.pinimg.com/564x/6d/83/8c/6d838c1335b182f649852498e6b9bee3.jpg" 
    },
    {
        name: "Mili",
        genre: "Female",
        birthday: "22 de Noviembre",
        img: "https://pm1.narvii.com/6248/a29467c04938df6d1b5eeba4ab286ad903e7fd0b_hq.jpg" 
    }
]

const charactersDocuments = characters.map((character) => new Character(character));

db.connectDB().then(async () => {
    await Character.collection.drop();
    console.log("Se eliminó con éxito :D")
}).catch((error) => console.log("No se pudo eliminar", error)).then(async () => {
    await Character.insertMany(charactersDocuments)
    console.log("Se crearon los personajes en la seed")
}).catch((error) => console.log("No se pudieron meter los personajes", error)).finally(() => mongoose.disconnect())