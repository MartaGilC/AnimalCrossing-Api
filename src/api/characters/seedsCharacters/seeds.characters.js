const mongoose = require('mongoose');
const Character = require("../modelCharacters/modelCharacters");
const db = require("../../../utils/database/db")
const characters = [
    {
        name: "Tom Nook",
        genre: "Male",
        birthday: "30 de Mayo",
        img: "https://static.wikia.nocookie.net/animalcrossing/images/e/e3/Tom_Nook_%28New_Horizons%29.png/revision/latest?cb=20200221070639&path-prefix=es" 
    },
    {
        name: "Juliana",
        genre: "Female",
        birthday: "5 de Mayo",
        img: "https://static.wikia.nocookie.net/animalcrossing/images/3/36/Juliana_%28New_Horizons%29.png/revision/latest?cb=20200319235004&path-prefix=es" 
    },
    {
        name: "Canela",
        genre: "Female",
        birthday: "20 de Diciembre",
        img: "https://static.wikia.nocookie.net/nintendo/images/6/6e/Canela_SSBU.png/revision/latest?cb=20180914125238&path-prefix=es" 
    },
    {
        name: "Mili",
        genre: "Female",
        birthday: "22 de Noviembre",
        img: "https://static.wikia.nocookie.net/animalcrossing/images/8/8c/Mili_%28New_Leaf%29.png/revision/latest/scale-to-width-down/150?cb=20190827100603&path-prefix=es" 
    },
    {
        name: "Paca",
        genre: "Female",
        birthday: "5 de Julio",
        img: "https://static.wikia.nocookie.net/animalcrossing/images/3/39/Paca_%28New_Leaf%29.png/revision/latest?cb=20180701222020&path-prefix=es" 
    },
    {
        name: "Estela",
        genre: "Female",
        birthday: "7 de Septiembre",
        img: "https://static.wikia.nocookie.net/animalcrossing/images/7/76/Estela_%28New_Horizons%29.png/revision/latest?cb=20200320010240&path-prefix=es" 
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