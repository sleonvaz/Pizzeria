// Import libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Import global resources
import { changeAction } from '@Models';
// Import local resources
import styles from './button.styles.css';

///////////// Component ////////////////

export class ButtonImp extends Component {
  handleClick = () => {
    this.props.changeText('hola');
  };
  render() {
    return (
      <a onClick={this.handleClick} className={styles.button}>
        {/* {this.props.children} */}
        {this.props.name}
      </a>
    );
  }
}

const mapStateToProps = state => ({
  name: state.rootReducer.nameButton,
});
const mapDispatchToProps = {
  changeText: changeAction,
};

export const ButtonConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonImp);
