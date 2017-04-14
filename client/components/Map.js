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
                                <Polyline color={ '#' + session['session_id'].substr(session['session_id'].length-6) } positions={session.waypoints.map(waypoint => [ waypoint.lat, waypoint.lng ])} />
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
