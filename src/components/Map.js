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

export default class MapContainer extends React.Component {
    handleClick(e) {
        console.log('in handler')
        fetch('/click')
            .then(resp => resp.text())
            .then(text => console.log('~~~~~', text))
            .catch(err => console.err('!!!!!!!!!!', err))
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
                        polys.map((poly, i) => {
                            return (
                                <Overlay name={String(i + 1)} key={i}>
                                    <Polyline color='red' positions={poly} />
                                </Overlay>
                            )
                        })
                    }
                </LayersControl>
                {/*
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
                */}
            </Map>
        )
    }
}
