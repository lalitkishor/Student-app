import React, { PureComponent } from "react";
import createBrowserHistory from "history/createBrowserHistory";
import { Router, Switch, Route } from "react-router-dom";
import Student from "./student/view/student-home";
import StudentDetail from "./student/view/student-detail";

const hist = createBrowserHistory();

class Main extends PureComponent {
    render() {
        return (<Router history={hist}>
            <>
                <Switch>
                    <Route exact path="/" component={Student} />
                    <Route path="/student-info/:id" component={StudentDetail} />
                </Switch>
            </>
        </Router>)
    }
}
export default Main; 