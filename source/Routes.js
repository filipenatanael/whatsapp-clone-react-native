import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import MainScreen from './components/MainScreen';
import WelcomeScreen from './components/WelcomeScreen';

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
      <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: 'white' }}>
      <Scene key='app'>
      <Scene key='loginScreen' component={LoginScreen} title="Login" hideNavBar={true} initial={!this.state.logged} />
      <Scene key='signUpScreen' component={SignUpScreen} title="SignUp" />
      <Scene key='mainScreen' component={MainScreen} title="MainScreen" initial={this.state.logged} />
      <Scene key='welcomeScreen' component={WelcomeScreen} title="WelcomeScreen" />
      </Scene>
      </Router>
    )
  }
}
