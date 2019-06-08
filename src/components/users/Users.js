import React, { Component } from 'react';
import { deleteUser } from '../../store/Actions/loginAppActions'
import { connect } from 'react-redux'
import './UsersList.scss'

class Users extends Component {


    render() {
        return (
            <tr>
                <td>{this.props.data.NAME}</td>
                <td>{this.props.data.EMAIL}</td>
                <td>{this.props.data.IP}</td>
                <td> <button onClick={() => { if (window.confirm(" Are you sure you wish to delete this item ? ")) this.props.delete(this.props.data.ID)}}> X </button></td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    delete: (payload) => dispatch(deleteUser(payload))
})

export default connect(null, mapDispatchToProps)(Users);


