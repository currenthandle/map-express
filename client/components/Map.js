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

import { connect } from 'react-redux'

@connect((state) => {
    return {
        device: state.device.device
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

                <LayersControl position='bottomright'>
                    { 
                        this.props.device.sessions && this.props.device.sessions.map((session, i) => {
                            return (
                                <Overlay name={String(i + 1)} key={i}>
                                    <Polyline color='red' positions={session.waypoints.map(waypoint => [ waypoint.lat, waypoint.lng ])} />
                                </Overlay>
                            )
                        })
                    }
                </LayersControl>
            </Map>
        )
    }
}
