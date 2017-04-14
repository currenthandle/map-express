import React from 'react'
import Control from 'react-leaflet-control'

export default class CustomControl extends React.Component {
    render() {
       return (
            <Control 
                position="bottomright">
                <img 
                    src='logo.png'
                    style={{ width: '20rem'}}
                />
            </Control>
        )
    }
} 
