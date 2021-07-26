import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Page1 from '../containers/Page1';
import Page2 from '../containers/Page2';

class Routes extends Component {
	render(){
		return(
      		<div>
	      		<Router>
		             <Route exact path="/"> 
		             	<Page1 />
		             </Route>
		             <Route path="/Page2">
		             	<Page2 />
		             </Route>
	            </Router>
	        </div>

		);
	}
}
export default Routes;