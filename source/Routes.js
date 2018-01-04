import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import MainScreen from './components/MainScreen';

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      loading: true,
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('@mytoken:key')
    .then((token) => {
      if (token != null) {
        this.setState({ logged: true, loading: false, });
      } else {
        this.setState({ loading: false })
      }
    });
  }
  render() {
    if (this.state.loading) {
      return <View><Text>Loading...</Text></View>;
    }
    return (
      <Router>
      <Scene key='app'>
      <Scene key='loginScreen' component={LoginScreen} title="Login" initial={!this.state.logged} />
      <Scene key='signUpScreen' component={SignUpScreen} title="SignUp" />
      <Scene key='mainScreen' component={MainScreen} title="MainScreen" initial={this.state.logged} />
      </Scene>
      </Router>
    )
  }
}
