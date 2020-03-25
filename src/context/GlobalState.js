
import React, { Component, createContext } from 'react'
import axios from 'axios'

// @ts-ignore
export const GlobalContext = createContext()


class GlobalProvider extends Component {

  state = {
    transactions: [],
    error: null,
    loading: true,
    searchItems: []
  }
  
  componentDidMount() {
    this.getTransactions()
  }

  getTransactions = async () => {
    try {
       axios.get('https://zachs-global-server.herokuapp.com/api/v1/transactions')
        .then(res => this.setState({
          transactions: res.data.data,
          loading: false
        }))
    } catch (error) {
      console.log(error);
    }
  }

  deleteTransaction = async (_id) => {
    try {
       await axios.delete(`https://zachs-global-server.herokuapp.com/api/v1/transactions/${_id}`)
        .then(res => this.setState({
          transactions:  [...this.state.transactions.filter(transactions => transactions._id !== _id)],
          loading: false
        }))
    } catch (error) {
      console.log(error);
    }
  }


  addTransaction = async (transaction) => {
    try {
       await axios.post('https://zachs-global-server.herokuapp.com/api/v1/transactions', transaction)
      .then(res => this.setState({
        transactions:  [...this.state.transactions, res.data.data],
        loading: false
        }))
    } catch (error) {
      console.log(error);
    }
  }



 
  //SECTION Search Filter 



  //SECTION Handle for search Input
  handleInput = (e) => {
    e.preventDefault();
    this.setState({ 
      searchItems: e.target.value 
    })
    console.log(e.target.value, this.state.searchItems);
    
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          //NOTE STATE
          transactions: this.state.transactions,
          error: this.state.error,
          loading: this.state.loading,
          searchItems: this.state.searchItems,
          //NOTE API CALLS
          getTransactions: this.getTransactions,
          deleteTransaction: this.deleteTransaction,
          addTransaction: this.addTransaction,
          //NOTE HANDLERS
          handleInput: this.handleInput,

        }}>
        {this.props.children}
      </GlobalContext.Provider>

    )
  }
}

export default GlobalProvider











// import React, { createContext, useReducer } from 'react';
// import AppReducer from './AppReducer';
// import axios from 'axios';

// // Initial state
// const initialState = {
//   transactions: [],
//   error: null,
//   loading: true
// }

// // Create context
// export const GlobalContext = createContext(initialState);

// // Provider component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   // Actions
//   async function getTransactions() {
//     try {
//       const res = await axios.get('https://zachs-global-server.herokuapp.com/api/v1/transactions');

//       // @ts-ignore
//       dispatch({
//         type: 'GET_TRANSACTIONS',
//         payload: res.data.data
//       });
//     } catch (err) {
//       // @ts-ignore
//       dispatch({
//         type: 'TRANSACTION_ERROR',
//         // payload: err.response.data.error
//       });
//     }
//   }

//   async function deleteTransaction(id) {
//     try {
//       await axios.delete(`https://zachs-global-server.herokuapp.com/api/v1/transactions/${id}`);

//       // @ts-ignore
//       dispatch({
//         type: 'DELETE_TRANSACTION',
//         payload: id
//       });
//     } catch (err) {
//       // @ts-ignore
//       dispatch({
//         type: 'TRANSACTION_ERROR',
//         // payload: err.response.data.error
//       });
//     }
//   }

//   async function addTransaction(transaction) {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }

//     try {
//       const res = await axios.post('https://zachs-global-server.herokuapp.com/api/v1/transactions', transaction, config);

//       // @ts-ignore
//       dispatch({
//         type: 'ADD_TRANSACTION',
//         payload: res.data.data
//       });
//     } catch (err) {
//       // @ts-ignore
//       dispatch({
//         type: 'TRANSACTION_ERROR',
//         // payload: err.response.data.error
//       });
//     }
//   }

//   return (
//   <GlobalContext.Provider value={{
//     transactions: state.transactions,
//     error: state.error,
//     loading: state.loading,
//     getTransactions,
//     deleteTransaction,
//     addTransaction
//   }}>
//     {children}
//   </GlobalContext.Provider>);
// }