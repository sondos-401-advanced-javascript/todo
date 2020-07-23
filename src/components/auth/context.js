/* eslint-disable no-console */
import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';



const API = 'https://api401-todo.herokuapp.com';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            login: this.login,
            signup: this.signup,
            logout: this.logout,
            user: {}
        }
    }

    login = async(username, password) => {

        try {
            const results = await fetch( `${API}/signin`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: new Headers({
                    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
                })
            });

            let res = await results.json();
            this.validateToken(res.token);


        } catch(err) {
            console.log('there is an error',err)
        }
    }

   
    signup = async(username, password,role) => {
        let obj = {
            username,
            password,
            role
        }
        

        try {
            const response = await fetch(`${API}/signup`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                  'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(obj),
              });

            let res = await response.json();
            this.validateToken(res.token);
        } catch(err) {
            console.log('there is an error',err)
        }
    }

    logout = () => {
        this.setLoginState(false, null, {});
    }

    validateToken = token => {

        try {
            let user = jwt.verify(token, 'homesweet');
            this.setLoginState(true, token, user);

        } catch (err) {
            this.logout();
            console.log("validate token error")
        }
    }
    
    setLoginState = (loggedIn, token, user) => {
        cookie.save('token', token);
        this.setState({token, loggedIn, user});
    }

    componentDidMount() {
        const cookieToken = cookie.load('token');
        const token = cookieToken || null;
        this.validateToken(token);
    }

    render() {
        return (
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}

export default LoginProvider;

