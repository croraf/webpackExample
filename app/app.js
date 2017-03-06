import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-shadow.png';

import React from 'react';
import {Map, TileLayer, Marker} from 'react-leaflet';
/*import L from 'leaflet';*/
import styles from './style1.css';


const tileLayer = (
    <TileLayer             
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
);

const centerPosition = [45.8, 16];

const marker = (
    <Marker 
        position={centerPosition}
        draggable={true}
    />
);



class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            location: 'null'
        };
    }

    handleClick = (e) => {
        this.setState({
            location: e.latlng.lat + ', ' + e.latlng.lng
        });
    }

    render () {

        return (
            <div>
                <Map 
                    onclick={this.handleClick}
                    className={styles.mapHeight}
                    center={centerPosition}
                    zoom={11} >

                    {tileLayer}
                    {marker}
                </Map>
                <div>{this.state.location}</div>
            </div>
        );
    }
}

export {App};