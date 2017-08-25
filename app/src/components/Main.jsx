import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Main = props => (
  <div>
    <h1>Preact Test - {props.config.env}</h1>
    {/* <img src={require('@/assets/images/logo.png')} /> */}
  </div>
);

Main.propTypes = {
  config: PropTypes.object,
};
Main.defaultProps = {
  config: {},
};

export default connect(state => state)(Main);
