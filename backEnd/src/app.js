import express from "express";
import cors from "cors";
import user from "./userR.js"



const app = express();

//Settings
app.set('port', 4000)

//Middleware
app.use(cors());
app.use(express.json());
import  "./database.js"



//Routes
app.use('/api/User',user);



//funcion main que activa la app
async function main(){

await app.listen(app.get("port"))
console.log("pruebita")
 
 }
 
 

 main();



export default app;
