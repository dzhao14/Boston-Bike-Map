import React, { PureComponent } from "react";
import { Map, TileLayer } from "react-leaflet";

class Example extends PureComponent {
  state = {
    lat: 42.35,
    lng: -71.08,
    zoom: 13,
  };

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
		  url='http://tiles.mapc.org/basemap/{z}/{x}/{y}.png'
		  attribution= 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>'
		  maxZoom='17'
		  minZoom='9'
        />
		<TileLayer
		  url='http://tiles.mapc.org/trailmap-onroad/{z}/{x}/{y}.png'
		  maxZoom='17'
		  minZoom='9'
		  //Solid line = already exists
		  //dashed line = proposed
		  //purple = protected bike lane
		  //dark blue = bike lane
		  //light blue = shared lane marking
		/>
      </Map>
    );
  }
}

export default Example;
