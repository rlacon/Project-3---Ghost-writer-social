import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Row, Container } from "../components/Grid";
import LoginModal from "../components/Modal";
import { Link } from "react-router-dom";
import "./style.css";


class SignIn extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            password: '',
            redirect: false,
            modalShow: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.showModal = this.showModal.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    modalClose = () => this.setState({ modalShow: false });

    showModal = () => document.getElementById("myModal").display('true');

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios.post('/user/signin', {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                this.setState({ redirect: true })
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                this.setState({
                    modalShow: true
                });
                console.log(this.state)

            })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/AllInProgress" />
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1>Ghost Writer</h1>
                </Row>
                <br />
                <Row>
                    <h4>Create and collaborate on stories!</h4>
                </Row>
                <br />
                <div className="container center_div">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="form-label" htmlFor="username">Username</label>
                            <input className="form-input"
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>

                            <input className="form-input"
                                placeholder="Enter your password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group ">
                            {this.renderRedirect()}
                            <button
                                className="btn btn-primary registerButton"
                                onClick={this.handleSubmit}
                                type="submit">Sign in</button>
                        </div>
                    </form>
                    <p className="registerText">Don't have an account? <Link style={{ marginTop: "40px", textAlign: "center", textDecoration: "underline", color: "#326699" }} to="/signUp">Sign up</Link></p>
                </div>
                <LoginModal
                    show={this.showModal}
                    onHide={this.modalClose}
                    title="Login Error"
                />
            </Container>
        )
    }
}

export default SignIn
