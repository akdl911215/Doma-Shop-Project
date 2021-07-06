import logo from './logo.svg';
import './App.css';
import { Signup, Signin } from 'webapp/user/index';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Home } from 'webapp/home/index';

const App = () => {
    return (
        <>
            <Router basename="/">
                <Route path="/home" component={Home} />
                <Route path="/users/users_signup" component={Signup} />
                <Route path="/users/users_signin" component={Signin} />
            </Router>
        </>
    );
};

export default App;
