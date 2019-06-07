import React, { Component } from 'react';
import './Dashboard.scss'
import AuthSingUp from '../auth/AuthSignUp';
import UsersList from '../users/UsersList';

class Dashboard extends Component {


    render() {
        return (
            <div className="dashboard-container">
            <AuthSingUp />
            <UsersList />
            </div>
        );
    }
}

export default Dashboard;


