import React, { Component } from 'react';
import './UsersList.scss'
import Users from './Users'
import connect from 'react-redux/es/connect/connect';
import { deleteAllUsers } from '../../store/Actions/loginAppActions'

class UsersList extends Component {
    render() {
        const items = this.props.items;

        if (items.length !== 0) {

            return (
                <div className='user-list-container'>
                    <table>
                        <tbody>
                            <tr>
                                <th> Nickname </th>
                                <th> Email </th>
                                <th> IP adress </th>
                                <th> <button onClick={() => { if (window.confirm(" this will delete the whole list, are you sure you want DELETE ALL ITEMS ? ")) this.props.delete(this.props.items.ID)}}> Delete All </button></th>
                            </tr>
                            {items.map((data, index) =>{
                                return (<Users key={index}
                                    data={data}
                                    />)
                            })}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return null;
        }
    }
}


const mapStateToProps = (state) => ({
    items: state.loginAppReducer.users
})

const mapDispatchToProps = (dispatch) => ({
    delete: (payload) => dispatch(deleteAllUsers(payload))
})
export default connect(
    mapStateToProps, mapDispatchToProps
)(UsersList);