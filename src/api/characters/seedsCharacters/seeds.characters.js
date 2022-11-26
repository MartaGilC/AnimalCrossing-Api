const mongoose = require('mongoose');
const Character = require("../modelCharacters/modelCharacters");
const db = require("../../../utils/database/db")
const characters = [
    {
        name: "Tom Nook",
        genre: "Male",
        birthday: "30 de Mayo",
        img: "https://i2-prod.dailystar.co.uk/tech/gaming/article21769965.ece/ALTERNATES/s1200c/0_Animal-Crossing.jpg" 
    },
    {
        name: "Juliana",
        genre: "Female",
        birthday: "5 de Mayo",
        img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/04/animal-crossing-new-horizons-1922389.jpg?itok=UHlvm64i" 
    },
    {
        name: "Canela",
        genre: "Female",
        birthday: "20 de Diciembre",
        img: "https://static1-es.millenium.gg/articles/1/16/10/1/@/71964-1303809-marie-ac-orig-1-article_cover_bd-2.png" 
    },
    {
        name: "Mili",
        genre: "Female",
        birthday: "22 de Noviembre",
        img: "https://i.blogs.es/juegos/16178/animal_crossing__switch_/fotos/noticias/animal_crossing__switch_-5136008.jpg" 
    },
    {
        name: "Paca",
        genre: "Female",
        birthday: "5 de Julio",
        img: "https://acnhcdn.com/latest/NpcPoster/NpcSpAlw.png" 
    },
    {
        name: "Estela",
        genre: "Female",
        birthday: "7 de Septiembre",
        img: "https://static1-es.millenium.gg/articles/7/19/40/7/@/91866-qzliw3evufq41-orig-1-article_cover_bd-1.jpeg" 
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