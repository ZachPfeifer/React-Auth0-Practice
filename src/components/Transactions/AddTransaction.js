import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const AddTransaction = () => {
  //SECTION Temp Hooks(useState)
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  //SECTION Pulls + transaction from Context
  const { addTransaction } = useContext(GlobalContext)
  //SECTION Handles
  const onSubmit = e => {
    e.preventDefault()
    const newTransaction = {
      text,
      //NOTE +amount turns string amount into number ammount
      amount: +amount,
    }

    addTransaction(newTransaction)
  }


  return (
    <div className="form-group">
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="Purchase">
          <label htmlFor="text">Purchase Name:</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter Purchase here..."
            required />
        </div>
        <div className="Amount">
          <label htmlFor="amount">
            Amount: <br />
            <small className="pl-3"> * - negative expense, + positive income*</small>
          </label>
          <span className="number-wrapper">
            <input
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              type="number"
              min="-1000000"
              placeholder="Enter +Amount or -Amount..."
              required />
          </span>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
