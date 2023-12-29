import React from "react";
import { useState, useEffect } from "react";
import Expenses from "./components/Expenses/expenses"
import NewExpenses from "./components/newExpenses/NewExpenses"


let Dummy_Expense = [
  {
  id:"e1",  
  date : new Date(2021,3,28),
  title : "school fee",
  amount : 300
  
},
{
  id:"e2",  
  date : new Date(2021,3,28),
  title : "books",
  amount : 300
  
},
{
  id:"e3",  
  date : new Date(2021,3,28),
  title : "house rent",
  amount : 300
},
  
{
  id:"e4",  
  date : new Date(2021,3,28),
  title : "food",
  amount : 300
  
},

];

function App() {
  
    // let expenseDate = new Date(2021,3,28);
    // let expenseTitle = "school fee"; 
    // let expenseAmount = 300

    const [expenses, setExpenses] = useState(Dummy_Expense);

    // let AddFormdata = (expenseFormData)=>{
          
    //       let AddedData = [expenseFormData, ...expenses]
    //       setExpenses(AddedData) ;
    //        console.log(AddedData);
         
    //       } ;
          

    let fetchDataG = ()=>{
      fetch('http://localhost:5000/expenses/data').then(
        response =>{
          return response.json();
        }
       ).then(
        data => {
          setExpenses(data);
        }
       )
    }
          useEffect(()=>{
            fetchDataG();
          },[]);

          let AddFormdata = (expenseFormData)=>{
           
            
              fetch('http://localhost:5000/expenses/data' , {
                method: 'POST' ,
                body : JSON.stringify(expenseFormData),
                headers : {
                  'content-type' : 'application/json'
                }
              }).then(
                response =>{
                  fetchDataG()
                  
                }
              )
               
         
            
            } ;

return (
    <>
    <div>
      <NewExpenses FormData = {AddFormdata}/>
      <Expenses item= {expenses}/>
      
    </div>
      
    </>
  )
}

export default App
