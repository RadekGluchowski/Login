import React, { Component } from 'react'
import './AuthSignUp.scss'

export default class AuthSignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nickname: "",
            email: "",
            ip: "",
            formErrors: { nickname: "", email: '', ip: "" },
            validNickname: false,
            validEmail: false,
            validIp: false,
        }
    }

    onChangeHandler = (e) => {
        const id = e.target.id
        const value = e.target.value
        this.setState({ [id]: value },
            () => { this.validateField(id, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let validNickname = this.state.validNickname;
        let validEmail = this.state.validEmail;
        let validIp = this.state.validIp;

        switch (fieldName) {
            case 'nickname':
                validNickname = value.match(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/);
                fieldValidationErrors.nickname = validNickname ? '' : 'Nickname wrong format';
                break;
            case 'email':
                validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = validEmail ? '' : 'Email wrong format';
                break;
            case 'ip':
                validIp = value.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
                fieldValidationErrors.ip = validIp ? '' : 'Ip adress wrong format';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            validEmail: validEmail,
            validNickname: validNickname,
            validIp: validIp,
        }, this.validateForm)
    }

    validateForm() {
        this.setState({ formValid: this.state.validEmail && this.state.validNickname && this.state.validIp })
    }

    render() {

        return (
            <div className='signup-container'>
                <div className='login-form' >
                    <h3> Crypto users</h3>
                    <div className='inputs-container'>
                        <form>
                            <div className='input-container'>
                                <span> Nickname </span>
                                <div className="input">
                                    <input
                                        id="nickname"
                                        onChange={(e) => this.onChangeHandler(e)}
                                        style={{ borderBottom: this.state.validNickname === null ? "1px solid red" : "1px solid black" }}
                                    />
                                    <p> {this.state.formErrors.nickname} </p>
                                </div>
                            </div>

                            <div className='input-container'>
                                <span> Email </span>
                                <div className="input">
                                    <input
                                        id="email"
                                        onChange={(e) => this.onChangeHandler(e)}
                                        style={{ borderBottom: this.state.validEmail === null ? "1px solid red" : "1px solid black" }}
                                    />
                                    <p> {this.state.formErrors.email}</p>
                                </div>
                            </div>

                            <div className='input-container'>
                                <span> IP adress </span>
                                <div className="input">
                                    <input
                                        id="ip"
                                        onChange={(e) => this.onChangeHandler(e)}
                                        style={{ borderBottom: this.state.validIp === null ? "1px solid red" : "1px solid black" }}
                                    />
                                    <p> {this.state.formErrors.ip}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='btn-add'>  <button type="submit" disabled={!this.state.formValid} > Add user </button> </div>
                </div>
            </div>
        )
    }
}
