import React from 'react'
import { IndexLink } from 'react-router'
import { connect } from 'react-redux'

import Reservation from './Reservation'
@connect((state) => {
    return {
        restaurants: state.restaurant.restaurants
    }
})
export default class Restaurant extends React.Component {
    state = {
        showRes: false
    }
    handleClick = (e) => {
        e.preventDefault() 
        this.setState({ showRes : !this.state.showRes })
    }
    componentWillReceiveProps(nextProps) {
        this.props.restaurants.forEach((restaurant) => {
            if(restaurant.rid == nextProps.routeParams.rid) this.setState({name: restaurant.name})
        })
    }
    render() {
        let res = ( this.state.showRes ?  <Reservation /> : null ) 

        return (
            <div>
                <IndexLink to='/'>Restaurant</IndexLink>
                <div> {this.state.name} </div>
                <div>87%</div>
                <button onClick={this.handleClick}>Make Reservation</button>
                {res}
            </div>
        )
    }
}
