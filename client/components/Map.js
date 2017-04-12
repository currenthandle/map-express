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

import ToggleContainer from './ToggleContainer'

import parser from './parser'

import route1 from './data/route1'
import route2 from './data/route2'
import route3 from './data/route3'

import midPointGen from './midPointFinder'
import genPolyline from './genPolyline'

let parsed1 = parser(route1)
let parsed2 = parser(route2)
let parsed3 = parser(route3)

let position =  midPointGen([ parsed1, parsed2, parsed3 ])

const polys = [
    genPolyline(parsed1),
    genPolyline(parsed2),
    genPolyline(parsed3)
]
console.log('polys', polys)

import { connect } from 'react-redux'

@connect((state) => {
    return {
        device: state.device.device
    }
})
export default class MapContainer extends React.Component {
    handleClick(e) {
        fetch('/click')
            .then(resp => resp.text())
            .then(text => console.log('~~~~~~~'))
            .catch(err => console.error('!!!!!!!!!!', err))
    }
    componentWillMount() { 
        //console.log('MapContainer mounted') 
    }
    render() {
        return (
            <Map 
                onClick={this.handleClick}
                center={position}
                zoom={15}
            >
                <TileLayer
                  attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />

                <LayersControl position='topright'>
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
                <LayersControl position='topright'>
                    { 
                        polys.map((poly, i) => {
                            return (
                                <Overlay name={String(i + 1)} key={i}>
                                    <Polyline color='red' positions={poly} />
                                </Overlay>
                            )
                        })
                    }
                </LayersControl>
            </Map>
        )
    }
}
