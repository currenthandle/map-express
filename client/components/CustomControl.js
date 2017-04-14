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
                        width: '18rem',
                        borderRadius: '.3rem',
                        padding: '.5rem',
                        border: '1px grey solid'

                    }}
                >
                    <div 
                        onClick={ this.handleOpen.bind(this) }
                    >
                        <div
                            style={{
                                display: 'inline-block',
                                fontSize: '1.7rem'
                            }}
                        >{ this.props.device['device_id'] }</div>
                        <button 
                            style={{
                                float: 'right',
                                width: '2rem',
                                height: '2.2rem',
                                borderRadius: '10%',
                                border: '1px grey solid',
                                backgroundImage: 'url("feather.png")',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'
                            }}    
                        />
                    </div>
                   {
                       this.state.open && <ul style={{
                            textAlign: 'center',
                            padding: 0,
                            textAlign: 'left'
                        }}>
                            {
                                this.props.device.sessions.map((session, i) => {
                                    const time =  String(new Date(1000 * Number(session['session_id']))) 
                                    return (
                                        <li
                                            key={i}
                                            style= {{
                                                listStyle: 'none',
                                                display: 'flex',
                                                verticalAlign: 'middle',
                                                fontSize: '1rem'
                                            }}
                                            onClick={ this.handleCheck.bind(this) }
                                            data-session = {session['session_id']}
                                            data-device= {this.props.device['device_id']}
                                        >
                                            <span style={{ 
                                                verticalAlign: 'middle', 
                                                flex: '3 1 auto'
                                            }}> { time.substr(0, time.indexOf('G')) + time.substr(time.indexOf('(')) }</span>
                                            <input 
                                                type='checkbox'
                                                className='checkbox'
                                                onChange={ this.handleCheck }
                                                id={session['session_id']}
                                                checked={ session.active }
                                                style= {{
                                                    verticalAlign: 'middle',
                                                    flex: '0 1 auto',
                                                    marginTop: '.22rem',
                                                    fontSize: '1rem',
                                                    zoom: '1.4',
                                                }}
                                            />
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
