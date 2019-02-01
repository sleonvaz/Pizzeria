// Import libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeAction } from '@Models';

///////////// Component ////////////////
export class Input extends Component {
  handleOnChange = event => {
    this.props.changeText(event.target.value);
  };
  render() {
    return <input type="text" name="fname" onChange={this.handleOnChange} />;
  }
}

const mapStateToProps = state => ({
  text: state.rootReducer.text,
});
const mapDispatchToProps = {
  changeText: changeAction,
};
export const InputConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
