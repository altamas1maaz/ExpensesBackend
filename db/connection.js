import mongoose from "mongoose";

let connectDB = async(dbUrl,dbName)=>{
   try {
    await mongoose.connect(dbUrl+dbName)
     console.log('connected to db successfully')
   } catch (error) {
     console.log(`error while connecting to db`)
   }
};

export default connectDB;