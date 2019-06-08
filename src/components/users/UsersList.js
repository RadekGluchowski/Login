import React, { Component } from 'react';
import './UsersList.scss'
import Users from './Users'
import connect from 'react-redux/es/connect/connect';
import { deleteAllUsers } from '../../store/Actions/loginAppActions'

class UsersList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            itemsSorted: null
        }
    }

    render() {

        this.state.itemsSorted = this.props.items

        if (this.state.itemsSorted.length !== 0) {

            return (
                <div className='user-list-container'>
                    <table>
                        <tbody>
                            <tr>
                                <th> <button onClick={() => this.setState({
                                    itemsSorted: this.state.itemsSorted.sort((prev, next) => prev.NAME.toLowerCase() > next.NAME.toLowerCase() ? 1 : -1)
                                })}> Nickname </button>  </th>
                                <th> <button onClick={() => this.setState({
                                    itemsSorted: this.state.itemsSorted.sort((prev, next) => prev.EMAIL.toLowerCase() > next.EMAIL.toLowerCase() ? 1 : -1)
                                })}> Email </button>  </th>
                                <th> <button onClick={() => this.setState({
                                    itemsSorted: this.state.itemsSorted.sort((prev, next) => prev.IP.toLowerCase() > next.IP.toLowerCase() ? 1 : -1)
                                })}> Ip </button> </th>
                                <th> <button onClick={() => { if (window.confirm(" this will delete the whole list, are you sure you want DELETE ALL ITEMS ? ")) this.props.delete(this.props.items.ID) }}> Delete All </button></th>
                            </tr>
                            {this.state.itemsSorted.map((data, index) => {
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