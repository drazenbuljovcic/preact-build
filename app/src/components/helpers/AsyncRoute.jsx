import React from 'react';
import PropTypes from 'prop-types';

export default class AsyncRoute extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.props.loading.then((module) => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }

  render() {
    if (this.state.loaded) {
      return <this.component />;
    }

    return <h2>Loading...</h2>;
  }
}

AsyncRoute.propTypes = {
  loading: PropTypes.object,
};
AsyncRoute.defaultProps = {
  loading: {},
};
