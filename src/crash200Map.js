import React, { PureComponent } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import jQuery from 'jquery';

var crash200 = jQuery.ajax({
      async: false,
	  url: './Top_200_Crash_Intersections_.geojson',
	  dataType: "json",
	  success: console.log("top 200 crash intersections successfully loaded"),
	  error: function(xhr) {
		  alert(xhr.statusText)
	  }
  });

class Top200Crash extends PureComponent {

  state = {
    lat: 42.35,
    lng: -71.08,
    zoom: 13,
  };

  render() {
	window.thing = crash200;
    const position = [this.state.lat, this.state.lng];
	
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
		  url='http://tiles.mapc.org/basemap/{z}/{x}/{y}.png'
		  attribution= 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>'
		  maxZoom='17'
		  minZoom='9'
        />
        <GeoJSON data={crash200.responseJSON} />
      </Map>
    );
  }
}

export default Top200Crash;

