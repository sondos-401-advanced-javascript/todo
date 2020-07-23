/* eslint-disable no-console */
import React from 'react';
import { LoginContext } from './context';
import {IfRender} from './condition';

class Auth extends React.Component {

    static contextType = LoginContext;

    render() {
        let okToRender = false;
        

        try {
            okToRender = this.context.loggedIn && (
                this.props.capability ? 
                    this.context.user.capability.includes(this.props.capability)
                    : true
            );
        } catch (e) {
            console.warn('Not Authorized!');
        }

        return (
            <IfRender condition={okToRender}>
                {this.props.children}
            </IfRender>
        )
    }
}

export default Auth;


