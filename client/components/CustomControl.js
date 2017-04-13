import React from 'react'
import Control from 'react-leaflet-control'

export default class CustomControl extends React.Component {
    render() {
       return (
            <Control position="topright">
                <div
                    style={{
                        backgroundColor: 'black',
                        padding: '5px',
                    }}
                >
                    <div style={{ marginLeft: '37px' }}>
                        <button onClick={this.handleUpPanClick}>
                            Pan up
                        </button>
                    </div>
                    <div>
                        <button onClick={this.handleLeftPanClick}>
                            Pan left
                        </button>
                        <button onClick={this.handleRightPanClick}>
                            Pan right
                        </button>
                    </div>
                    <div style={{ marginLeft: '30px' }}>
                        <button onClick={this.handleDownPanClick}>
                            Pan down
                        </button>
                    </div>
                </div>
            </Control>
        )
    }
} 
