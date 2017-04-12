
import React, { Component } from 'react'
//import logo from './logo.svg';
//import './App.css';

import MapContainer from './Map'
import { setDevice } from '../actions/device'

import { connect } from 'react-redux'

@connect((state) => {
    return { }
})
export default class App extends Component {
    componentWillMount() {
        //console.log('this.props', this.props)
        console.log('dispatch setDevice')
        this.props.dispatch(setDevice())
    }
    render() {
        return (
            <MapContainer />	
        );
    }
}
