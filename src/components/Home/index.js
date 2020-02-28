import MainView from './MainView';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import PointInput from "./PointInput";
import Graphic from "./Graphic";
import { POINTS_LOADED } from "../../constants/actionTypes";

const mapStateToProps = state => ({
    appName: state.common.appName,
    currentUser: state.common.currentUser,
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: POINTS_LOADED, payload }),
});

class Home extends React.Component {


    componentWillMount() {
        if (this.props.currentUser)
            this.props.onLoad(agent.Points.all());
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div className="home-page">

                    <Graphic/>
                    <PointInput/>

                    <div className="container page points-table">
                        <MainView/>
                    </div>

                </div>
            );
        } else
            return null;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
