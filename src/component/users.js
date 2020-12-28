import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCategory} from '../store/actions/categoryAction'

 class Users extends Component {
    componentDidMount(){
        this.props.getUsers()
        
    }
    render() {
        const {users} = this.props.users
        console.log(this.props.users)

        
        return (
            <div>
                {users.map(u => 
                     <React.Fragment key={u.id}>
                         <h3>{u.name}</h3> <small>{u.saved_by}</small>
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getCategory})(Users)