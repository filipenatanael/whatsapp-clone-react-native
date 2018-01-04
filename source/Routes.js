import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import MainScreen from './components/MainScreen';

export default props => (
  <Router>
  <Scene key='app'>
  <Scene key='loginScreen' component={LoginScreen} title="Login" />
  <Scene key='signUpScreen' component={SignUpScreen} title="SignUp" />
  <Scene key='mainScreen' component={MainScreen} title="MainScreen" initial />
  </Scene>
  </Router>
);
