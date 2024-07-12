import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()
app.use(cors({origin:process.env.CORS_ORIGIN_URL,credentials:true}))
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from './routers/user.router.js';

app.use('/user', userRouter)

export {app}