
import React, { Component, createContext } from 'react'
// import Chips, { Chip } from 'react-chips'

import axios from 'axios'

// @ts-ignore
export const GlobalContext = createContext()


class GlobalProvider extends Component {

  state = {
    transactions: [],
    error: null,
    loading: true,

    chips: true, //displayAsChips Maybe not a bool
    pinned: [],
    searchItems: []
    //Had Search turn that Bound
  }
  
  componentDidMount() {
    this.getTransactions()


  }

  // SECTION API CALLS
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


  //ANCHOR Maybe API call that determines whether items is chipped(pinned) REFERENCE Marked from Kanban 
  // WOULD NEED to add chipped to object on server end // If added could have a reactive graph


 
  
  
  //SECTION Search Filter 
  
  //SECTION Handle for search Input
//FIXME Streamline search by having onSubmit
//FIXME Push input to state 
  handleInput = (e) => {
    debugger
    e.preventDefault();
    const {searchItems, chips, transactions, pinned} = this.state
    if( e.target.value === undefined ){
  this.setState({ 
    searchItems: transactions,
  })    
}else{ 
  debugger
  this.setState({ 
    searchItems: [e.target.value],
    pinned: e.target.value,
    chips: true
  })
}
console.log(`Target: ${e.target.value}, SearchItems: ${searchItems.id}, Chips: ${chips}`);
}

//NOTE Handles for Chips
handleDeleteChip = (item) => {
  const {transactions, pinned, searchItems} = this.state
  debugger
    this.setState({
      chips: false,
      //NOTE Had searchItems originally
      pinned: searchItems.map(transaction=>{
      if(transaction === item){
        transaction= !transaction
      }
       return item
      })
      // pinned: searchItems.filter(transaction=> transaction.key!== item.key)
    })
}

  handleClickChip = () => {
    //NOTE Maybe use to pinned items to search  
    debugger
    //Need to set destructored items from state
    //Need to set pinned item to search results/ Transaction History(maybe prevState)
    //Need to handle changing filterItems to include state of pinned items 
    //Clear Search input
    const {searchItems, chips, pinned,} = this.state
    this.setState({
      pinned: searchItems.push(pinned),
      chips: true
    })
    console.log(`You clicked the Chip. pinned: ${pinned}, SearchItems: ${searchItems}, Chips: ${chips}`);



  };


  //FIXME TRIAL HANDLERS
  hideChip=()=>{
    this.setState({ chips: false });
  }
  onChange = chips => {
    this.setState({ chips });
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
        chips: this.state.chips,
        //NOTE API CALLS
        getTransactions: this.getTransactions,
        deleteTransaction: this.deleteTransaction,
        addTransaction: this.addTransaction,
        //NOTE HANDLERS
        handleInput: this.handleInput,
        handleDeleteChip: this.handleDeleteChip,
        handleClickChip: this.handleClickChip,
        
        //FIXME TRIAL HANDLERS
          hideChip: this.hideChip,
          onChange: this.onChange
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