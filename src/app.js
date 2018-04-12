import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Map from './exampleMap.js';
import Elevation from './elevationMap.js';
import './App.css';

const elevation = () => (
		<div>
		  <h1 align="center"> Elevation </h1>
		  <Elevation />
		</div>
	);

const bikeLanes = () => (
		<div className="map">
		  <h1 align="center">Current & Future Bike Lanes</h1>
		  <Map />
		</div>
	);

class App extends Component {
  render() {
    return (
      <Router>
	  <div id="wtf">
	    <div>
		  <h1 align="center"> Boston Street Index for Bikers </h1>
		</div>
		<div>
		  <li>
		    <Link to="/bike-lanes">bike lanes</Link>
		  </li>
		  <li>
		    <Link to="/elevation">elevation</Link>
		  </li>
		  <hr/>
	      <Route exact path="/elevation" component={elevation} />
	      <Route exact path="/bike-lanes" component={bikeLanes} />
		</div>
	  </div>
	  </Router>
    );
  }
}

export default App;
