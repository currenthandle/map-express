import React from 'react'
import { Link } from 'react-router'

export default class ResturantListItem extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div><Link to={String(this.props.rid)}>{this.props.name}</Link></div>
        )
    }
}
