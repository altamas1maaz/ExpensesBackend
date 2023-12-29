import mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
    title:{type:String, require:true},
    amount:{type:Number, min:1,require:true},
    date:Date
});

let expenseModel = mongoose.model("expense",expenseSchema) ;

export default expenseModel;