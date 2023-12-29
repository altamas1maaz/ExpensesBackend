import React from 'react'
import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';
    
  /*  >>>>>>>>>>>>>>>>>>>>>>>>>

let ExpenseItem=(props)=>{
        
       const [newtitle, setNewTitile] = useState("maaz");
       const [title, setTitile] = useState(props.title);

 let ChangeTitle =()=>{
   setTitile(newtitle);
 }

 let ChangeHandler =(event)=>{
    setNewTitile(event.target.value)

 }
  return (
    <Card className='expense-item'>
      <ExpenseDate date ={props.date}/>
       <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
        <input type="text" value={newtitle}  onChange={ChangeHandler}/>
        <button onClick={ChangeTitle}>change tittle</button>
       </div>
    </Card>
  )
}


export default ExpenseItem ;

 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  */

 let ExpenseItem=(props)=>{
        
  
return (
<Card className='expense-item'>
 {/* <ExpenseDate date ={props.date}/> */}
 <ExpenseDate date ={new Date(props.date)}/>
  <div className='expense-item__description'>
   <h2>{props.title}</h2>
   <div className='expense-item__price'>{props.amount}</div>
  </div>
</Card>
)
}


export default ExpenseItem ;