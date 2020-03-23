//NOTE Need to originize what is seen with Auth and what is not see with !Auth
// import PropTypes from 'prop-types'
// import withUser from '../../components/Login/withUser'
// import { GoChevronDown } from "react-icons/go";


import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from './DrawerToggleButton'
import Logo from '../../assets/images/Transaction-Tracker-Icon.png'
import {MdAccountCircle  } from "react-icons/md";
import { FaHome } from 'react-icons/fa';
import AccountDialogContainer from './AccountDialogContainer';

const ToolBar = (props) => {

  const {
    drawerClickHandler,
    // firstName,
    // isLoggedIn,
    // requireAuth,
  } = props

  // if(requireAuth && !isLoggedIn){
  //   return null
  // }
  // else{
    return (
      <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><Link to="/React-Expense-Tracker/"><img src={Logo} alt="Logo"/> Transaction Tracker</Link></div>
        <div className="spacer"></div>
        <div className="toolbar__navigation-items">
          <ul>
           {/* <li className="d-flex justify-content-center">{firstName}</li>  */}
            <li><Link to="/React-Expense-Tracker/"><FaHome /> Home</Link></li>
            <li><Link to="/React-Expense-Tracker/account"><MdAccountCircle/> Login/Register</Link></li>
            {/* <li><Link to="/React-Expense-Tracker/account/details"><MdAccountCircle/> <GoChevronDown/></Link></li> */}
            
          {/* FIXME - Construction */}

          
            <AccountDialogContainer> SECTION Trial Dialog BTN </AccountDialogContainer>
          {/* FIXME End of Construction */}


          </ul>
        </div>
      </nav>
    </header>
  );
}
// }

// ToolBar.propType={
//   to: PropTypes.string.isRequired,
//   firstName: PropTypes.string.isRequired,
//   isLoggedIn: PropTypes.bool,
//   requireAuth: PropTypes.bool,
// }

// ToolBar.defailtProps={
//  isLoggedIn: false,
//  requireAuth: false
// }






export default ToolBar;