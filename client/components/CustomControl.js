import React from 'react'
import Control from 'react-leaflet-control'

import { connect } from 'react-redux'

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
                        width: '26rem'
                    }}
                >
                    <div>
                        <div
                            style={{
                                display: 'inline-block'
                            }}
                        >{ this.props.device['device_id'] }</div>
                        <button 
                            style={{
                                float: 'right'
                            }}    
                            onClick={ this.handleOpen.bind(this) }
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
                                        >
                                            <input 
                                                type='checkbox'
                                                onChange={ this.handleCheck }
                                                id={session['session_id']}
                                            />
                                            { console.log('session', session) }
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
        console.log(e.currentTarget)
    }
    handleOpen(e) {
        e.preventDefault()
        this.setState({ open: !this.state.open })
    }
} 
