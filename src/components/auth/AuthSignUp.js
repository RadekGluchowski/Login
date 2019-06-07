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
            btnDisabled: true
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
                fieldValidationErrors.nickname = validNickname ? true : false;
                break;
            case 'email':
                validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = validEmail ? true : false;
                break;
            case 'ip':
                validIp = value.match(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)
                fieldValidationErrors.ip = validIp ? true : false;
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
        this.setState({
            formValid: this.state.validEmail && this.state.validNickname && this.state.validIp
        }, this.btnDisabling)
    }

    btnDisabling() {
        this.setState({
            btnDisabled: this.state.formErrors.nickname && this.state.formErrors.email && this.state.formErrors.ip === true ? false : true
        })

        console.log(this.state.formErrors.nickname)
        console.log(this.state.formErrors.email)
        console.log(this.state.formErrors.ip)
    }


    render() {

        console.log(this.state.btnDisabled)
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
                                        placeholder="Nickname example: Cat, Dog"
                                    />
                                    <p style={{ display: this.state.formErrors.nickname === false ? "" : "none" }}> Nickname wrong format </p>
                                </div>
                            </div>

                            <div className='input-container'>
                                <span> Email </span>
                                <div className="input">
                                    <input
                                        id="email"
                                        onChange={(e) => this.onChangeHandler(e)}
                                        style={{ borderBottom: this.state.validEmail === null ? "1px solid red" : "1px solid black" }}
                                        placeholder="Email example: Statham@gmail.com"
                                    />
                                    <p style={{ display: this.state.formErrors.email === false ? "" : "none" }} > Email wrong format </p>
                                </div>
                            </div>

                            <div className='input-container'>
                                <span> IP adress </span>
                                <div className="input">
                                    <input
                                        id="ip"
                                        onChange={(e) => this.onChangeHandler(e)}
                                        style={{ borderBottom: this.state.validIp === null ? "1px solid red" : "1px solid black" }}
                                        placeholder="Ip example: 52.12.111.251"
                                    />
                                    <p style={{ display: this.state.formErrors.ip === false ? "" : "none" }} > Ip adress wrong format </p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='btn-add'>  <button disabled={this.state.btnDisabled}  > Add user </button> </div>
                </div>
            </div>
        )
    }
}
