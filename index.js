const express = require('express');
const db = require('./src/utils/database/db');
const CharactersRoutes = require('./src/api/characters/characters.routes')
const EditionsRoutes = require('./src/api/editions/editions.routes');
const UserRoutes = require('./src/api/users/model.user/user.routes');
const cors = require('cors')

const PORT = 3000;
db.connectDB()
const server = express();

server.use(cors({
    origin: "*",
    credentials: true
  }))

server.use(express.json());
server.use(express.urlencoded({ extended: false }));


server.use('/characters', CharactersRoutes)
server.use('/editions', EditionsRoutes)
server.use('/users', UserRoutes)
server.listen(PORT, ()=> {
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
});