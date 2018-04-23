import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Map from './exampleMap.js';
import Elevation from './elevationMap.js';
import BikeCrash from './bikecrashMap.js';
import Streetlights from './streetlightMap.js';
import Top200Crash from './crash200Map.js';
import './App.css';

const elevation = () => (
		<div>
		  <h1 align="center"> Elevation </h1>
		  <Elevation />
		</div>
	);

const bikecrashes = () => (
		<div>
		  <h1 align="center"> Dangerous Biking Intersections </h1>
		  <BikeCrash/>
		</div>
	);

const crash200 = () => (
		<div>
		  <h1 align="center"> Top 200 Most Dangerous Intersections </h1>
		  <Top200Crash/>
		</div>
	);

const streetlights = () => (
		<div>
		  <h1 align="center"> Streetlight Locations </h1>
		  <Streetlights/>
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
		  <li>
		    <Link to="/bike crashes">bike crashes</Link>
		  </li>
		  <li>
		    <Link to="/crash200">Most dangerous intersections</Link>
		  </li>
		  <li>
		    <Link to="/street lights">street lights</Link>
		  </li>
		  <hr/>
	      <Route exact path="/elevation" component={elevation} />
	      <Route exact path="/bike-lanes" component={bikeLanes} />
	      <Route exact path="/bike crashes" component={bikecrashes} />
	      <Route exact path="/street lights" component={streetlights} />
	      <Route exact path="/crash200" component={crash200} />
		</div>
		<div>
		<p> Click the following links to see the map of Boston layered with the
		labeled dataset!
		</p>
		</div>
	  </div>
	  </Router>
    );
  }
}

export default App;
