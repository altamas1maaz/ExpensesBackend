import expenseModel from "../models/expenseModel.js";

let addExpensesData =async (title,amount,date)=>{
    try {
        let expense =new expenseModel({title,amount,date});
        await expense.save();
        return "success"
    } catch (error) {
        console.log(`error while adding expenses data in to db = ${error}`)
        return "error"
    }
};

export default addExpensesData;