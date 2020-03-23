import React from 'react'
import { Link } from 'react-router-dom';
import UserIcon from '../../assets/images/UserIcon.png'
import { MdAccountCircle  } from "react-icons/md";
import { FaHome } from 'react-icons/fa';

const sideDrawer = ({ show }) => {

  
  let drawerClasses = 'side-drawer'

  if (show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      
      <ul>
        <div className="drawer__profile d-flex align-items-center flex-column bd-highlight">
          <li className="bd-highlight">Welcome Guest User</li>
          <br/>
          <img className="bd-highlight" src={UserIcon} alt="Proile Pic"/>
          <br/>
          <li><small className="bd-highlight text-muted"> <Link to="/React-Expense-Tracker/account">Sign in</Link> to see Account Details</small></li>
        </div>
        <li><Link to="/React-Expense-Tracker/"><FaHome/> Home</Link></li>
        <li><Link to="/React-Expense-Tracker/account"><MdAccountCircle/> Login/Register</Link></li>
      </ul>
    </nav>
  );
}

export default sideDrawer;