import React from 'react';

export default class AsyncRoute extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.loading.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    })
  }

  render() {
    if(this.state.loaded) {
      return <this.component />
    } else {
      return <h2>Loading...</h2>
    }
  }
};