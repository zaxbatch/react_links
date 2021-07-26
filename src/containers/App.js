import React, {Component} from 'react';
import '../css/App.css';
import Page1 from './Page1';
import Routes from '../components/Routes';

class App extends Component {

  render() {
    return (
      <div>
        <Routes>
          <Page1 />
        </Routes>

      </div>
    );
  }
}

export default App;

