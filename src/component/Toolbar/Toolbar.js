import React from 'react';

import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="#smth">THE LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#users">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
