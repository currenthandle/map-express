import React, { Component } from 'react'

import MapContainer from './Map'
import DeviceControls from './DeviceControls'

import { setDevice } from '../actions/device'

import { connect } from 'react-redux'

@connect((state) => {
    return { }
})
export default class App extends Component {
    componentWillMount() {
        this.props.dispatch(setDevice())
    }
    render() {
        return (
            <MapContainer />	
        );
    }
}
