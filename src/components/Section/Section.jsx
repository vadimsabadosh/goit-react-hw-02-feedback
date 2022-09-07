import React, { Component } from 'react';
import PropsTypes from 'prop-types';
export default class Section extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
Section.propTypes = {
  title: PropsTypes.string.isRequired,
};
