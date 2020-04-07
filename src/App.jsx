import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers';
import { alertActions } from './actions';
import { PrivateRoute } from './components';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

export default class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
            </Router>
        );
    }
}

