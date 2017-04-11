import React from 'react'

import { Link, IndexLink } from 'react-router'

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <IndexLink to='/'>Home</IndexLink>
                <Link to='signup'>Sign Up</Link>
                <Link to='signin'>Sign In</Link>
                <Link to='users'>Users</Link>
            </nav>
        )
    }
}

export default NavBar
