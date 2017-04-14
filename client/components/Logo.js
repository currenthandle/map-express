import React from 'react'
import Control from 'react-leaflet-control'

export default class CustomControl extends React.Component {
    render() {
       return (
            <div
                style={{
                    width: '1rem !important',
                    display: 'block'
                }}
            >
                <Control 
                    position="bottomright">
                    <img src='logo.png' />
                </Control>
            </div>
        )
    }
} 
