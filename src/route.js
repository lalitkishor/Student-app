import React, { PureComponent } from "react";
import createBrowserHistory from "history/createBrowserHistory";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import Student from "./student/view/student-home";
import StudentDetail from "./student/view/student-detail";
import User from "./user/user";

const hist = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('isAuth')
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

class Main extends PureComponent {

    render() {
        return (<Router history={hist}>
            <>
                <Switch>
                    <Route path="/login" component={User} />
                    <PrivateRoute path="/student-info/:id" component={StudentDetail} />
                    {/* <Route path='/' component={Student} /> */}
                    <PrivateRoute path='/' component={Student} />
                </Switch>
            </>
        </Router>)
    }
}
export default Main; 
