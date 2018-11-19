import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer } from 'react-leaflet';
import webpack from 'webpack';

const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [38.305456, -101.159517];
const zoomLevel = 4;

class LeafletMap extends Component {
    render() {
        return (
            <div>
                <h3>Map</h3>
                <Map
                    center={mapCenter}
                    zoom={zoomLevel}
                >
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                    />
                </Map>
            </div>
        );
    }
}

export default LeafletMap;
//const wrapper = document.getElementById("leaflet-map");
wrapper ? ReactDOM.render(<LeafletMap />, document.getElementById("leaflet-map")) : false;
