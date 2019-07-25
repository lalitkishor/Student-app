
import React, { PureComponent } from "react";
import createBrowserHistory from "history/createBrowserHistory";
import { Router, Switch, Route } from "react-router-dom";
import Student from "./student/view/student-home";
import StudentDetail from "./student/view/student-detail";
import User from "./user/user"

class PrivateRoute extends PureComponent {
    render() {
        const { component: Component, path } = this.props;
        return (
            <Route
                exact
                render={(props) => {
                    console.log('props', props)
                }}
            />
        )
    }
}
export default PrivateRoute