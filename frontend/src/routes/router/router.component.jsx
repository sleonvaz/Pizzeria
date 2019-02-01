// Import libraries
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Import global resources
import { Store, changeAction, eraseAction } from '@Models';
import { logo } from '@Assets';
import { ButtonConnect, TextConnect, InputConnect } from '@Components';

// Import local resources
// import styles from './router.styles.css';
import Principal from '../../components/principal/Principal';

///////////// Component ////////////////
export class Router extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Principal />
      </Provider>
    );
  }
}
