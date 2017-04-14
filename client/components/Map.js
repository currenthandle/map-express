import React from 'react';
//import { render } from 'react-dom';
import { 
    Map, 
    Polyline, 
    Marker, 
    Popup, 
    Tooltip,
    TileLayer, 
    LayersControl
} from 'react-leaflet';

const { BaseLayer, Overlay } = LayersControl

import CustomControl from './CustomControl'
import Logo from './Logo'

import { connect } from 'react-redux'

function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
console.log(hash, 'hash')
    return hash;
} 

function intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return '#' + "00000".substring(0, 6 - c.length) + c;
}

@connect((state) => {
    return {
        data: state.data.data,
        currentDevice: state.data.currentDevice
    }
})
export default class MapContainer extends React.Component {
    render() {
        return (
            <Map 
                center={[37.778377, -122.404072]}
                zoom={15}
            >
                <TileLayer
                  attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {
                    this.props.data && this.props.data.map( device => {
                        return device.sessions.filter(session => {
                            return session.active
                        }).map(session => {
                            return (
                                <Polyline weight={4} color={ intToRGB(hashCode(session['session_id'])) } positions={session.waypoints.map(waypoint => [ waypoint.lat, waypoint.lng ])} />
                            )
                        })
                    })
                }
                {
                    this.props.data && this.props.data.map( (device, i)  => <CustomControl device={device} key={i} />)
                }
                 <Logo/>
            </Map>
        )
    }
}
