import React, { Component } from 'react';

import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';

export default class App extends Component<{}> {
  render() {
    return (
      <SignUpScreen />
    );
  }
}
