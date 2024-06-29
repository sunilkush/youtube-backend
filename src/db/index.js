import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"
const createDB = async()=>{
        try {
           const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
           console.log(`database connected !`)
        } catch (error) {
            console.log(`Mongodb does't connect : ${error}`)
            process.exit(1)
        }
}

export default createDB