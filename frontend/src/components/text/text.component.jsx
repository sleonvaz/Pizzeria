// Import libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

///////////// Component ////////////////
export class Text extends Component {
  render() {
    return (
      <div>
        <span>{this.props.text}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.rootReducer.text,
});

export const TextConnect = connect(mapStateToProps)(Text);
