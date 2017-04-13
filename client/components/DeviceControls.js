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
            <div
                style= {{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '2.2rem',
                }}
            > 
                <button 
                    className='back'
                    onClick={this.handleClick.bind(this)}
                    style= {{
                        flex: '0 1 auto',
                        marginRight: '3rem',
                        width: '5rem',
                        borderRadius: '1rem',
                        border: 'none'

                    }}
                >Back</button>
                <div
                    style= {{
                        fontSize: '2rem',
                        flex: '0 1 auto',
                    }}
                >{ this.props.data && this.props.data[this.props.currentDevice]['device_id'] }</div>
                <button 
                    className='forward'
                    onClick={this.handleClick.bind(this)}
                    style= {{
                        flex: '0 1 auto',
                        borderRadius: '1rem',
                        width: '5rem',
                        marginLeft: '3rem',
                        border: 'none'
                            
                    }}
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
