import React from 'react'

import { connect } from 'react-redux'

import { changeDevice } from '../actions/changeDevice'

@connect((state) => {
    return {
        currentDevice: state.data.currentDevice,
        numDevices: state.data.numDevices,
        data: state.data.data,
    }
})
export default class DeviceControls extends React.Component {
    render() {
        return (
            <div>
                <button 
                    className='back'
                    onClick={this.handleClick.bind(this)}
                >Back</button>
                { console.log( this.props, '********')    }
        
                <div>{ this.props.data && this.props.data[this.props.currentDevice]['device_id'] }</div>
                <button 
                    className='forward'
                    onClick={this.handleClick.bind(this)}
                >Forward</button>
            </div>
        ) 
    }
    handleClick(e) {
        e.preventDefault()
        if (e.target.className === 'back'){
            this.props.dispatch(changeDevice(this.props.currentDevice, 'back', this.props.numDevices))
        } else {
            this.props.dispatch(changeDevice(this.props.currentDevice, 'forward', this.props.numDevices))
        }
        
    }
}
