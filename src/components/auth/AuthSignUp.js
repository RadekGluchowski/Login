import React, { Component } from 'react'
import './AuthSignUp.scss'
import FormErrors from './FormErrors'

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
                fieldValidationErrors.nickname = validNickname ? '' : ' is invalid';
                break;
            case 'email':
                validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = validEmail ? '' : 'is invalid';
                break;
            case 'ip':
                validIp = value.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
                fieldValidationErrors.ip = validIp ? '' : 'is invalid';
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

        
        /* 
                // eslint-disable-next-line no-lone-blocks
                {Object.keys(this.state.formErrors).map((fieldName, i) => {
                    if (this.state.formErrors[fieldName].length > 0) {
                    console.log(fieldName)
                        if (fieldName === "nickname") {
                            this.setState({
                                errorNickname: true
                            })
                            } else if (fieldName === "email") {
                                this.setState({
                                    errorEmail: true
                                })
                        } else {
                            this.setState({
                                errorIp: true
                            })
                         }
                         
                    } else { return '';}
                })};
         */

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
                                    />
                                    <p> {this.state.validNickname} </p>
                                </div>
                            </div>

                            <div className='input-container'>
                                <span> Email </span>
                                <div className="input">
                                    <input
                                        id="email"
                                        onChange={(e) => this.onChangeHandler(e)}
                                    />
                                    <p> Wrong Email format </p>
                                </div>
                            </div>

                            <div className='input-container'>
                                <span> IP adress </span>
                                <div className="input">
                                    <input
                                        id="ip"
                                        onChange={(e) => this.onChangeHandler(e)}
                                    />
                                    <p> Wrong Ip adress format </p>
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
