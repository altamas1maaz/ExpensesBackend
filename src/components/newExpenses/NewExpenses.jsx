import React from 'react'
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'



let  NewExpenses =(props)=>{

  let onExpenseFormdata = (enterExpensesFormdata)=>{
     const expenseFormData = {
        ...enterExpensesFormdata,
        id: Math.random().toString()
     }
     props.FormData(expenseFormData);
     console.log(expenseFormData)
     
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpensesData={onExpenseFormdata}/>
    </div>
  )
}

export default NewExpenses
