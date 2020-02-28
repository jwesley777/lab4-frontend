import '../App.css';
import Header from './Header';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {APP_LOAD, REDIRECT} from "../constants/actionTypes";
const mapStateToProps = state => ({
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    points: state.points.points,
    redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
    onLoad: (username, token) =>
        dispatch({ type: APP_LOAD, username, token }),
    onRedirect: () =>
        dispatch({ type: REDIRECT })
});

class App extends React.Component {
    componentWillMount() {
        const token = window.localStorage.getItem('token');
        const username = window.localStorage.getItem('username');
        if (token) {
            agent.setToken(token);
        }

        this.props.onLoad(username, token);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            this.context.router.replace(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }

    render() {
        return (
            <div>
                <Header
                    currentUser={this.props.currentUser}
                    appName={this.props.appName} />

                {this.props.children}

            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
