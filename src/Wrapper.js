import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";

export default WrappedComponent => {
    class Wrapper extends Component {
        state = { isLoading: true };

        componentDidMount = () => this.setTimer();

        componentDidUpdate = prevProps => {
            if (this.props.location !== prevProps.location) {
                this.clearTimer();
                this.setState({ isLoading: true }, () => this.setTimer());
            }
        };

        clearTimer = () => clearTimeout(this.timeout);

        timer = () => this.setState({ isLoading: false }, () => this.clearTimer());

        setTimer = () => (this.timeout = setTimeout(this.timer, 200));

        render = () => (
            <Fragment>
                {
                    this.state.isLoading
                        ? <div>Loading...</div>
                        : <WrappedComponent {...this.props} />
                }
            </Fragment>
        );
    }
    return withRouter(Wrapper);
};
