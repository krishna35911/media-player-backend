//import json server library in index.js file
const jsonServer= require('json-server')

//create json-server
const mediaPlayerServer = jsonServer.create()

//create path to json file
const router = jsonServer.router('db.json')

//middleware to convert json to js
const middleware = jsonServer.defaults()

//use middleware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup port for running server => react and json server is running in port 3000 for default.To avoid the clash,change the poet no of json server

const port = 5000 || process.env.port  //if port 5000 is already running,process.env.port used to occupy to any other free port number.

//to listen server for resolving request from client
mediaPlayerServer.listen(port,()=>
{
    console.log(`mediaplayerserver start at ${port} and waiting for request`);
})