import React, { Component } from 'react';
import { deleteUser } from '../../store/Actions/loginAppActions'
import { connect } from 'react-redux'
import './UsersList.scss'

class Users extends Component {


    render() {
        console.log(this.props.data.ID)
        console.log(this.props)
        return (
            <tr>
                <td>{this.props.data.NAME}</td>
                <td>{this.props.data.EMAIL}</td>
                <td>{this.props.data.IP}</td>
                <td> <button onClick={() => {this.props.delete(this.props.data.ID)}}> X </button></td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    delete: (payload) => dispatch(deleteUser(payload))
})

export default connect(null, mapDispatchToProps)(Users);


