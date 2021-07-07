import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollIntoView from './webapp/common/helpers/ScrollIntoView';
import ScrollToTop from './webapp/common/helpers/ScrollToTop';
import { Signup, Signin } from 'webapp/user/index';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Home } from 'webapp/home/index';
import { HomeVideoBg } from 'webapp/common/index';

const App = () => {
    return (
        <>
            <Router basename="/">
                <ScrollIntoView>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path={`/`} component={HomeVideoBg} />
                            <Route exact path="/users/users_signup" component={Signup} />
                            <Route exact path="/users/users_signin" component={Signin} />
                        </Switch>
                    </ScrollToTop>
                </ScrollIntoView>
            </Router>
        </>
    );
};

export default App;
