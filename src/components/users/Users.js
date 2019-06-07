import React, { Component } from 'react';
import './UsersList.scss'

class Users extends Component {
    render() {
        return (
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td> <button> X </button></td>
            </tr>
        );
    }
}

export default Users;


