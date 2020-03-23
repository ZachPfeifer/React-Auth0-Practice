import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Transaction } from './Transaction'

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext)
 
 
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getTransactions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
  }, [])


  return (
    <>
      <h3>History</h3>
      <div className="list-container">
        <ul className="list">
          {transactions.map(transaction => ((
            <Transaction transaction={transaction} key={transaction._id} />
          )))}
        </ul>
      </div>
    </>
  )
}

export default TransactionList
