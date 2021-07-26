import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Page1 from '../containers/Page1';
import Page2 from '../containers/Page2';

class Routes extends Component {
	render(){
		return(
      		<div>
	      		<Router>
		             <Route exact path="/"  render={()=><Page1 />} />
		             <Route path="/Page2" render={()=><Page2 />} />
	            </Router>
	        </div>

		);
	}
}
export default Routes;