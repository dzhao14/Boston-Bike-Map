import React, { PureComponent } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import jQuery from 'jquery';

var trees = jQuery.ajax({
      async: false,
	  url: './Trees.geojson',
	  dataType: "json",
	  success: console.log("Trees successfully loaded"),
	  error: function(xhr) {
		  alert(xhr.statusText)
	  }
  });

//var blah = jQuery.when(trees).done(function() {console.log(trees.responseJSON);});

//var requirejs = require('requirejs');
//requirejs.config({
//  baseUrl: __dirname,
//  nodeRequire: require
//});
//var json = requirejs('/home/dzhao/my-app/src/Trees.geojson');
//console.log(json);

class Elevation extends PureComponent {

  state = {
    lat: 42.35,
    lng: -71.08,
    zoom: 13,
  };

  render() {
	window.thing = trees;
    const position = [this.state.lat, this.state.lng];
	
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
		  url='http://tiles.mapc.org/basemap/{z}/{x}/{y}.png'
		  attribution= 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>'
		  maxZoom='17'
		  minZoom='9'
        />
        <GeoJSON data={trees} />
      </Map>
    );
  }
}

export default Elevation;

