import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';

export default props => (
  <Router>
  <Scene key='app'>
  <Scene key='loginScreen' component={LoginScreen} title="Login" />
  <Scene key='signUpScreen' component={SignUpScreen} title="SignUp" />
  </Scene>
  </Router>
);
