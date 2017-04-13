import React, { Component } from 'react'

import MapContainer from './Map'
import DeviceControls from './DeviceControls'

import { getData } from '../actions/getData'

import { connect } from 'react-redux'

@connect((state) => {
    return { }
})
export default class App extends Component {
    componentWillMount() {
        this.props.dispatch(getData())
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <MapContainer />	
                {/*<DeviceControls /> */}
            </div>
        );
    }
}
