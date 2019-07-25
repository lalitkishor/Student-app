import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import setAuth from "./user-action";
import Button from 'react-bootstrap/Button';

class User extends Component {
    setCookie = () => {
        this.props.setAuth();
        localStorage.setItem("isAuth", true);
        setTimeout(() => {
            this.props.history.push("/");
        }, 100)
    }
    render() {
        return (
            <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
                <strong>Email :</strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                    <input type="email" id="username" />
                </div>
                <strong>Password :</strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                    <input type="password" id="password" />
                </div>
                <Button style={{ marginTop: '10px' }} onClick={this.setCookie}> Login </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setAuth: () => dispatch(setAuth())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));