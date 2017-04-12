import React from 'react'

import { connect } from 'react-redux'

import { changeDevice } from '../actions/changeDevice'

@connect((state) => {
    return {
        currentDevice: state.data.currentDevice,
        numDevices: state.data.numDevices
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
                <div>Title</div>
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
            console.log('back')
            this.props.dispatch(changeDevice(this.props.currentDevice, 'back', this.props.numDevices))
        } else {
            this.props.dispatch(changeDevice(this.props.currentDevice, 'forward', this.props.numDevices))
        }
        
    }
}
