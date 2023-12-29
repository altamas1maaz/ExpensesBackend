import  express  from "express";
import dotenv from 'dotenv'
const app = express();
dotenv.config();
import mongoose from "mongoose";
import cors from 'cors';
const port = process.env.PORT ;
import expenseRouter from "./routes/expenseRouter.js";
import connectDb from './db/connection.js'
 
//Conecting to DB
const dbUrl = process.env.DBURL
const dbName = process.env.DBNAME
connectDb(dbUrl,dbName)

app.use(cors())

// json format parse // axios json
app.use(express.json())

app.use("/expenses",expenseRouter)


app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`)
}) ;
