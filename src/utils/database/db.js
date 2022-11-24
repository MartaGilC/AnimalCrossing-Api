;
const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://marta:roots@cluster0.skyrous.mongodb.net/ac?retryWrites=true&w=majority';

if (!DB_URL) throw new Error('No se encuentra la base de datos');

const connectDB = async () => {
    try{
        const db = await mongoose.connect(DB_URL);
        const {name, host} = db.connection;
        console.log(`Conectado a la bs: ${name} en ${host}`)
    }catch(error){
        console.log("Error al conectar a la bs", error);
    };

}
module.exports = {
    connectDB,
    DB_URL
}