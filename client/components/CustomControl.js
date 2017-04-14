import React from 'react'
import Control from 'react-leaflet-control'

import { connect } from 'react-redux'

import { toggleTrajectory } from '../actions/toggleTrajectory'

@connect((state) => {
    return {
        data: state.data.data
    }
})
export default class CustomControl extends React.Component {
    state = {
        open: false
    }
    render() {
       return (
            <Control position="topright">
                <div
                    style={{
                        backgroundColor: 'white',
                        //backgroundColor: 'black',
                        padding: '5px',
                        textAlign: 'center',
                        width: '20rem'
                    }}
                >
                    <div 
                        onClick={ this.handleOpen.bind(this) }
                    >
                        <div
                            style={{
                                display: 'inline-block'
                            }}
                        >{ this.props.device['device_id'] }</div>
                        <button 
                            style={{
                                float: 'right'
                            }}    
                        >X</button>
                    </div>
                   {
                       this.state.open && <ul style={{
                            padding: 0,
                            textAlign: 'left'
                        }}>
                            {
                                this.props.device.sessions.map((session, i) => {
                                    return (
                                        <li
                                            key={i}
                                            style= {{
                                                listStyle: 'none'
                                            }}
                                            onClick={ this.handleCheck.bind(this) }
                                            data-session = {session['session_id']}
                                            data-device= {this.props.device['device_id']}
                                        >
                                            <input 
                                                type='checkbox'
                                                className='checkbox'
                                                onChange={ this.handleCheck }
                                                id={session['session_id']}
                                                checked={ session.active }
                                            />
                                            <span>{ String(new Date(1000 * Number(session['session_id']))) }</span>
                                        </li>
                                    )
                                }) 
                            }
                        </ul>
                   }
                </div>
            </Control>
        )
    }
    handleCheck(e){
        let li  = e.currentTarget,
            checkbox = li.querySelector('.checkbox')

        checkbox.checked = !checkbox.checked
        let session = li.dataset.session,
        device = li.dataset.device
        this.props.dispatch(toggleTrajectory(session, device, this.props.data))


    }
    handleOpen(e) {
        e.preventDefault()
        this.setState({ open: !this.state.open })
    }
} 
