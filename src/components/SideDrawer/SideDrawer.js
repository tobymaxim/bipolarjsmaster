import React from 'react';
import {Link} from "gatsby"

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
      drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <div className="close-button" onClick={props.click}>x</div>
      <ul>
        
        {props.data && props.data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
          <li><Link className="menu-link" to={`/${item.title.toLowerCase()}`}>{item.title}</Link></li>))
        }
      </ul>
    </nav>
  );
};

export default SideDrawer;