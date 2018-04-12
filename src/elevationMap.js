import React, { PureComponent } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";

class Elevation extends PureComponent {
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
      </Map>
    );
  }
}

export default Elevation;
