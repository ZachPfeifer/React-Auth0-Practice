import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import {Transaction} from './Transaction'
import SearchBox from './SearchBox'


const TransactionList = (props) => {
  const { getTransactions, handleInput} = useContext(GlobalContext)
 
 
  useEffect(() => {
    getTransactions()// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  let transactions = props.filterItems.map((transaction) => {
      return <Transaction
      transaction={transaction} 
      key={transaction._id}
        // key={transaction._id}
        // id={transaction._id}
        // text={transaction.text}
        // amount={transaction.amount}
        />
  })


  return (
    <>
      <h3>History</h3>
      <SearchBox handleInput={handleInput} />
<hr/>
      <div className="list-container">
        <ul className="list">
          {transactions}
          {/* {transactions.map(transaction => ((
            <Transaction transaction={transaction} key={transaction._id} />
          )))} */}
        </ul>
      </div>
    </>
  )
}

export default TransactionList
