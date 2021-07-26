import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

class Menu extends Component {

  render() {
    return (
      <div>
          <Route>
            <Link className="nav-link" to="/">Page 1</Link>
            <Link className="nav-link" to="/page2">Page2</Link>
          </Route>
      </div>
    );
  }
}

export default Menu;

