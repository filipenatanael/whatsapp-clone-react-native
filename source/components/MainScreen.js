import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>

      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Welcome to Whatsapp!</Text>
      </View>

      <View style={{ flex: 1 }}>
      <Button title='Checking Status' onPress={() => alert('Welcome! You are logged.')} />
      <Button title='Sign Out' onPress={() => Actions.loginScreen()} />
      </View>

      </View>
    );
  }
}
