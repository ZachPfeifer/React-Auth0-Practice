import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
// import SearchBox from './SearchBox'
import {Capitalize} from './../Utility/capitalize'



export default function TransactionsContainer() {
  const { transactions, searchItems  } = useContext(GlobalContext)

 
  
  
  //SECTION Search transaction by Name(Text) and Amount.
  let filterItems = transactions.filter(transaction => {
    return Capitalize(transaction.text).includes(searchItems) 
  })
  
  
  // console.log(`transactions ${transactions}`, `searchItems ${searchItems}` `Chips: ${chips}`);
  
  return (
   <>
    <Balance />
    <IncomeExpenses />
    {/* <SearchBox handleInput={handleInput} /> */}
    <TransactionList filterItems={filterItems} />
    <AddTransaction />
   
   </>
  )
}
