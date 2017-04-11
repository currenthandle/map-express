import React from 'react'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = { users: [] }

        fetch('/user')
            .then(resp => resp.json())
            .then(users => this.setState({ users }))
            .catch(err => console.error(err))
    }
    render() {
        const users = this.state.users.map((user, index) => {
            return (
                <div key={index}>
                   <span>{user.username}</span>  
                   <span>{user.nativeLang}</span>  
                   <span>{user.learning}</span>  
                   <span>{user.skillLevel}</span>  
                    
                </div>
            )
        })
        return (
            <div>
                {users}
            </div>
        )
    }
}
export default Users
