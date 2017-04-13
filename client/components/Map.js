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
                <CustomControl />
                {/*

                <LayersControl position='bottomright'>
                    { 

                        this.props.data && this.props.data[this.props.currentDevice].sessions.map((session, i) => {
                            return (
                                <Overlay name={String(new Date(1000 * Number(session['session_id'])))} key={i}>
                                    <Polyline color='red' positions={session.waypoints.map(waypoint => [ waypoint.lat, waypoint.lng ])} />
                                </Overlay>
                            )
                        })
                    }
                </LayersControl>
                */}
            </Map>
        )
    }
}
