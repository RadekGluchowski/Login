import React, { Component } from 'react'
import './AuthSignUp.scss'

export default class AuthSignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nickname: "",
            email: "",
            ip: "",
        }

    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state.nickname)
    }

    render() {


        return (
            <div className='signup-container'>
                <h3> Crypto users</h3>
                <div className='inputs-container'>
                    <form>
                        <div className='input'>
                            <span> Nickname </span>
                            <input
                                id="nickname"
                                onChange={this.onChangeHandler}
                            />
                        </div>

                        <div className='input'>
                            <span> Email </span>
                            <input
                                id="email"
                                onChange={this.onChangeHandler}
                            />
                        </div>

                        <div className='input'>
                            <span> IP adress </span>
                            <input
                                id="ip"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                    </form>
                </div>
                <div className='btn-add'>  <button> Add user </button> </div>
            </div>
        )
    }
}
