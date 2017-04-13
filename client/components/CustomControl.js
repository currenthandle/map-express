import React from 'react'
import Control from 'react-leaflet-control'

import { connect } from 'react-redux'

@connect(state => {
    return {
        data: state.data.data,
        currentDevice: state.data.currentDevice
    }
})
export default class CustomControl extends React.Component {
    render() {
       return (
            <Control position="topright">
                <div
                    style={{
                        backgroundColor: 'white',
                        //backgroundColor: 'black',
                        padding: '5px',
                    }}
                >
                    <div 
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        { console.log('#############',this.props) }
                        <button
                            style={{ 
                                width: '5rem',
                                marginRight: '1rem',
                                border: 'none',
                                borderRadius: '1rem'
                            }}
                        >Back</button>

                        <div>{ this.props.data && this.props.data[this.props.currentDevice]['device_id']}</div>
                        <button
                            style={{ 
                                width: '5rem',
                                marginLeft: '1rem',
                                border: 'none',
                                borderRadius: '1rem'
                            }}
                        >Forward</button>
                    </div>
                    <ul style={{
                        padding: 0,
                        textAlign: 'left'
                    }}>
                        {
                            this.props.data && this.props.data[this.props.currentDevice].sessions.map((session, i) => {
                                return (
                                    <li
                                        key={i}
                                        style= {{
                                            listStyle: 'none'
                                        }}
                                    >
                                        <input 
                                            type='checkbox'
                                        />
                                        <span>{ String(new Date(1000 * Number(session['session_id']))) }</span>
                                    </li>
                                )
                            }) 
                        }
                    </ul>
                </div>
            </Control>
        )
    }
} 
