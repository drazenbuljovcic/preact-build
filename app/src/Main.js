import React from 'react';
import { connect } from 'react-redux';

export class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return <h1>Preact Test - {this.props.config.env}</h1>;
  }
}

export default connect(state => state)(Main);