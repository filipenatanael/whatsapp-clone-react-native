import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>

      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Welcome to Whatsapp Clone!</Text>
      </View>

      <View style={{ flex: 1 }}>
      <Button title="SignUp" onPress={() => Actions.loginScreen()} />
      </View>

      </View>
    );
  }
}
