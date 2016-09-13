import React, { Component, PropTypes } from 'react';

// Daycare Center component - represents a single daycareCenter
export default class DaycareCenter extends Component {
  render() {
    return (
      <li>{this.props.daycareCenter.text}</li>
    );
  }
}

DaycareCenter.propTypes = {
  // This component gets the daycare center to display through a React prop.
  // We can use propTypes to indicate it is required
  daycareCenter: PropTypes.object.isRequired,
};
