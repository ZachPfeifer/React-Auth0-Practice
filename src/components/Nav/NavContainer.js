import React, { Component } from 'react'
import ToolBar from './ToolBar';
import SideDrawer from './SideDrawer';
import Backdrop from '../Utility/Backdrop';
// import sideDrawer from './SideDrawer';
// import backdrop from '../Utility/Backdrop';

export default class NavContainer extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    //REVIEW Use prevState to garantee the state continues changing correctly
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    //REVIEW FUCKING MAGIC Let allows empty variable / if() assigns component as variable!!!! Can even pass Functions/props!!!!!
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <ToolBar
          drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    )
  }
}
