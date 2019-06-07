import React, { Component } from 'react';
import './UsersList.scss'
import Users from './Users'

class UsersList extends Component {
    render() {
        return (
            <div className='user-list-container'>
                <table>
                    <tr>
                        <th> Nickname </th>
                        <th> Email </th>
                        <th> IP adress </th>
                    </tr>
                    <Users />
                </table>
            </div>
        );
    }
}

export default UsersList;