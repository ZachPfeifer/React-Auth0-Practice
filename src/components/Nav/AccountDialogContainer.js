import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AccountDetails from './AccountDetails'
import {MdAccountCircle  } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import UserIcon from '../../assets/images/UserIcon.png'

export default class AccountDialogContainer extends Component {

state={
    isOpen: false
}

render(){
    return(
        <li className="text-wrap"> 
        <div onClick={(e)=>this.setState({ isOpen: !this.state.isOpen })}><MdAccountCircle/> <GoChevronDown/></div>

        <AccountDetails isOpen={this.state.isOpen} onClose={(e)=> this.setState({isOpen: false})}>
        <div className="d-flex align-items-center flex-column  container-fluid">
          <li className="center-text">Welcome user.firstName</li>
          <br/>
          <img src={UserIcon} alt="Proile Pic"/>
          <br/>
          <li><b> Email:</b> user.email</li>
          <li><b>Occupation:</b> user.occupation</li>
          <li><b>Bio:</b> user.bio</li>
          <li><small className=" text-muted"> <Link to="/React-Expense-Tracker/account/details">More Account Details</Link></small></li>
        </div>
        </AccountDetails>
     </li>
    )
}



}
