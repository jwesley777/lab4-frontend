import App from './components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import store from "./store";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import Register from "./components/Register";
import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';


ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="login" component={Login} />
                <Route path="register" component={Register} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));
