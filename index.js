//import json-server libary in index.js
const jsonServer = require('json-server')

//create server using json-server library
const mediaplayerServer = jsonServer.create()

//create path for db.json file
const router = jsonServer.router('db.json')

//middlewar - convert js to json
const middlewear = jsonServer.defaults()

//connect/use middlewear and router in server
mediaplayerServer.use(middlewear)
mediaplayerServer.use(router)

//setup port for the server
const port = 8000 || process.env.PORT

//to listen server for resolving request
mediaplayerServer.listen(port,()=>{
    console.log(`mediaplayerServer started at ${port} and ready fetch request`);
})