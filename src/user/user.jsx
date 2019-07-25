import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class User extends Component {
    setCookie = () => {
        document.cookie = "username:" + document.getElementById('username').value + ";" + "password" + document.getElementById('password')
    }
    render() {
        return (
            <>
                <div>
                    <input type="text" id="username" />
                </div>
                <div>
                    <input type="password" id="password" />
                </div>
                <Button onClick={this.setCookie}> Login </Button>
            </>
        )
    }
}
export default User;