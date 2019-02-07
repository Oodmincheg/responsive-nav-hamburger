import React, { Component } from 'react';
import Toolbar from './component/Toolbar/Toolbar';
import SideDrawer from './component/SideDrawer/SideDrawer';
import Backdrop from './component/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: `100%` }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p id="products">This is product.</p>
          <p id="users">This is user</p>
        </main>
      </div>
    );
  }
}

export default App;
