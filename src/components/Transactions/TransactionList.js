import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import {Transaction} from './Transaction'
import SearchBox from './SearchBox'


const TransactionList = (props) => {
  const { getTransactions, handleInput, onChange} = useContext(GlobalContext)
 
 
  useEffect(() => {
    getTransactions()// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  let transactions = props.filterItems.map((transaction) => {
      return <Transaction
      transaction={transaction} 
      key={transaction._id}
        />
  })


  return (
    <>
      <h3>History</h3>
      <SearchBox handleInput={handleInput} onChange={onChange} />
      <hr/>
      <div className="list-container">
        <ul className="list">
          {transactions}
        </ul>
      </div>
    </>
  )
}

export default TransactionList
