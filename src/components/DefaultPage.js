import React, {Component} from 'react';
import Menu from '../components/Menu';

class DefaultPage extends Component {

  render() {
    return (
      <div>
        <Menu />
        <h1>{ this.props.title }</h1>
      </div>
    );
  }
}

export default DefaultPage;
