const mongoose = require("mongoose");
const Editions = require("../modelEdition/model.editions");
const db = require("../../../utils/database/db");


const editions = [
    {
        name:"Animal Crossing: Wild World",
        date:2006,
        nintendo: "DS",
        img:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_ds_22/SI_NDS_AnimalCrossingWildWorld_image1600w.jpg"
    },
    {

        name:"Animal Crossing: Let's go to the City",
        date:2008,
        nintendo: "WII",
        img:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wii_24/SI_Wii_AnimalCrossingLetsGoToTheCity_image1600w.jpg"

        
    },
    {
        name:"Animal Crossing: New Leaf",
        date:2013,
        nintendo: "3DS",
        img:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_3ds_25/H2x1_3DS_AnimalCrossingNewLeaf_WelcomeAmiibo.jpg"
    },
    {
        name:"Animal Crossing: New Horizons",
        date:2020,
        nintendo: "SWITCH",
        img:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AnimalCrossingNewHorizons_image1600w.jpg"
    },
]

const editionsDocuments = editions.map((edition) => new Editions(edition));

db.connectDB().then(async() => {
    await Editions.collection.drop();
    console.log("Se eliminó todo con éxito")
}).catch((error) => console.log("No se pudo eliminar", error)).then(async () => {
    await Editions.insertMany(editionsDocuments)
    console.log("Se crearon en el seed")
}).catch((error) => console.log("No se pudo crear el seed", error)).finally(()=> mongoose.disconnect())