const express = require('express');
const db = require('./src/utils/database/db');
const indexRoutes = require('./src/api/index/index.routes')
const CharactersRoutes = require('./src/api/characters/characters.routes')

const PORT = 3000;
db.connectDB()
const server = express();


server.use('/characters', CharactersRoutes)
server.listen(PORT, ()=> {
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
});