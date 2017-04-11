import React from 'react'
import { List, Radio } from 'semantic-ui-react'

export default class ToggleContainer extends React.Component{
    render(){
        return <div>
            <List>
                <List.Item>
                    <Radio 
                        toggle
                        label='one'
                    />
                </List.Item>
            </List>
        </div>
    }

}
