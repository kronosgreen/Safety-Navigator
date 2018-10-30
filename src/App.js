import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './App.css';
import webpack from 'webpack';

const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [38.305456, -101.159517];
const zoomLevel = 4;

require("babel-core").transform("code", options);
export default class App extends Component {
    render() {
        return (
            <div>
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
