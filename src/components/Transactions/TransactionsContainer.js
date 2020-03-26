import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import {Capitalize} from './../Utility/capitalize'



export default function TransactionsContainer() {
  const { transactions, searchItems  } = useContext(GlobalContext)

 
  
  
  //SECTION Search transaction by Name(Text) and Amount.
  // FIXME Broken Capitalize
  let filterItems = transactions.filter(transaction => {
    return Capitalize(transaction.text).includes(searchItems) 
  })
  
  
  
  return (
   <>
    <Balance />
    <IncomeExpenses />
    <TransactionList filterItems={filterItems || transactions} />
    <AddTransaction />
   
   </>
  )
}
