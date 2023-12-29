import addExpensesData from "../services/expenseService.js";
import expenseModel from "../models/expenseModel.js";

let expensesData = async(req,res)=>{
    try {
        let expenseapi = await expenseModel.find({})
        res.send( expenseapi )
    }
     catch (error) {  
      console.log(`erorr in ExpensesData = ${error}`)  
    };
};

let expensesPostData = async(req,res)=>{
    try {
        let {title,amount,date}=req.body
        let status =await addExpensesData(title,amount,date); 
        console.log(status)
        if (status = "success") {
            
              res.status(200).send("sucess")
        } else {
           res.status(501).send("error")
        }
    } catch (error) {
        console.log(`error in expensesPostDate function = ${error}`)
    }
      

};

export {expensesData, expensesPostData};