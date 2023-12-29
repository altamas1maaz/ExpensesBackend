import React from 'react'
import  ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card';

let Expenses = (props)=>{
  return (
    <Card className='expenses'>

      {
      props.item.map(
        expense => (
          <ExpenseItem 
          key={expense.id} 
          date={expense.date} 
          title={expense.title} 
           amount={expense.amount} />
        )
      )
      }
      
    
        {/* <ExpenseItem date ={props.item[1].Date} title ={props.item[1].Title} amount ={props.item[1].Amount} />
        <ExpenseItem date ={props.item[2].Date} title ={props.item[2].Title} amount ={props.item[2].Amount} />
        <ExpenseItem date ={props.item[3].Date} title ={props.item[3].Title} amount ={props.item[3].Amount} /> */}
    </Card>
  )
}

export default Expenses ;
