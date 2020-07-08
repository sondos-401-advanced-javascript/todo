/* eslint-disable no-console */
import React from 'react';

import { LoginContext } from './context.js';
import { IfRender, IfSignup } from './condition';


class Login extends React.Component {

    static contextType = LoginContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            role: '',
            condition: true
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.context.login(this.state.username, this.state.password);
    }
    handleSubmitSignUp = e => {
        e.preventDefault();
        this.context.signup(this.state.username, this.state.password,this.state.role);
    }
    
    handelClick = e => {
        e.preventDefault();
        this.setState({condition: false})
    }
    render() {
       
        return (
            <>
                <IfRender condition={this.context.loggedIn}>
                    <button onClick={this.context.logout} className='log'>Logout</button>
                </IfRender>
                <IfRender condition={!this.context.loggedIn}>
                    <IfSignup condition={this.state.condition}>
                        <form onSubmit={this.handleSubmit} className='log'>
                            <input
                                placeholder="userName"
                                name="username"
                                onChange={this.handleChange}
                            />
                            <input
                                placeholder="password"
                                name="password"
                                onChange={this.handleChange}
                            />
                            <button>Login</button>
                        </form>
                        <button onClick={this.handelClick} className='logs'>SignUp</button>
                    </IfSignup>
                    <IfSignup condition={!this.state.condition}>
                        <form onSubmit={this.handleSubmitSignUp} className='log'>
                            <input
                                placeholder="userName"
                                name="username"
                                onChange={this.handleChange}
                            />
                            <input
                                placeholder="password"
                                name="password"
                                onChange={this.handleChange}
                            />
                            <input
                                placeholder="user,editor,admin"
                                name="role"
                                onChange={this.handleChange}
                            />
                            <button>SignUp</button>
                        </form>
                    </IfSignup>
                </IfRender>
            </>
        )
    }

}

export default Login;