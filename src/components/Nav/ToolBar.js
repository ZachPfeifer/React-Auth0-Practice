//NOTE Need to originize what is seen with Auth and what is not see with !Auth

import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from './DrawerToggleButton'
import Logo from '../../assets/images/Transaction-Tracker-Icon.png'
import {MdAccountCircle  } from "react-icons/md";
import { FaHome } from 'react-icons/fa';

import { NavLink as RouterNavLink } from "react-router-dom";



import { useAuth0 } from "../../react-auth0-spa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const ToolBar = (props) => {


  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });



  const {
    drawerClickHandler,
  } = props

    return (
      <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><Link to="/React-Expense-Tracker/"><img src={Logo} alt="Logo"/> Transaction Tracker</Link></div>
        <div className="spacer"></div>
        <div className="toolbar__navigation-items d-flex justify-content-end">
          <ul className="d-flex align-items-center mr-5">
            <li><Link to="/React-Expense-Tracker/"><FaHome /> Home</Link></li>
          {/* FIXME - Construction */}
          {/*SECTION Sign in Button  */} {/*NOTE  DONE*/}
              {!isAuthenticated && (
                  <li onClick={() => loginWithRedirect({})}><Link>
                  <MdAccountCircle/> Login/Register
                  </Link></li>
              )}

              {/*SECTION USER ICON AND OPTIONS  */}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="25"
                      />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/React-Expense-Tracker/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                      >
                      <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                    </DropdownItem>
                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                      >
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            {!isAuthenticated && (
              <Nav className="d-md-none" navbar>
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="danger"
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              </Nav>
            )}
            {isAuthenticated && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="25"
                    />
                    <h6 className="d-inline-block">{user.name}</h6>
                  </span>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="user" className="mr-3" />
                  <RouterNavLink
                    to="/React-Expense-Tracker/profile"
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="power-off" className="mr-3" />
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Log out
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}


            {/* <AccountDialogContainer> SECTION Trial Dialog BTN </AccountDialogContainer> */}
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