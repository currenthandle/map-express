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
                        { console.log('props', this.props) }
                        { console.log('props', this.props.data[this.props.currentDevice]) }

                        <div>{ this.props.data[this.props.currentDevice]['device_id']}</div>
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
                        <li
                            style= {{
                                listStyle: 'none'
                            }}
                        >
                            <input 
                                type='checkbox'
                            />
                            <span>Session 1</span>
                        </li>
                        <li
                            style= {{
                                listStyle: 'none'
                            }}
                        >
                            <input 
                                type='checkbox'
                            />
                            <span>Session 2</span>
                        </li>
                        <li
                            style= {{
                                listStyle: 'none'
                            }}
                        >
                            <input type='checkbox'/>
                            <span>Session 3</span>
                        </li>
                        <li
                            style= {{
                                listStyle: 'none'
                            }}
                        >
                            <input type='checkbox'/>
                            <span>Session 5</span>
                        </li>
                    </ul>
                </div>
            </Control>
        )
    }
} 
