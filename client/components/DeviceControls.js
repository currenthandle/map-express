import React from 'react'

import { connect } from 'react-redux'

@connect((state) => {
    return {
        //device: state.device.device
    }
})
export default class DeviceControls extends React.Component {
    render() {
        return (
            <div>
                <button>Left</button>
                <div>Title</div>
                <button>Right</button>
            </div>
        ) 
    }
}
