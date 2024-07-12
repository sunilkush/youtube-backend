import dotenv from "dotenv"
import { app } from "./app.js"; 
import createDB from "./db/index.js";
dotenv.config({
    path: './.env'
})
app.get('/', function(req,res){
  res.send('hello world')
})
createDB().then(()=>{
  app.listen(process.env.PORT || 5000 ,()=>{
    console.log(`server run : ${process.env.PORT}`)
  })
}).catch((error)=>{
    console.log(error)
    app.on("errror", (error) => {
        console.log("ERRR: ", error);
        throw error
    })
})
  
