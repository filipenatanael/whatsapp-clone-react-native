import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { currentUserTesting } from '../actions/ActionsTesting';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>

      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Welcome to Whatsapp!</Text>
      </View>

      <View style={{ flex: 1 }}>

      <View style={{ padding: 10 }}>
      <Button color="#127826" title='Checking Status' onPress={() => alert('Welcome! You are logged.')} />
      </View>

      <View style={{ padding: 10 }}>
      <Button title='Sign Out' onPress={() => Actions.loginScreen()} />
      </View>

      <View style={{ padding: 10 }}>
      <Button color="#be0032" title='Reset Password' onPress={() => alert(`We sent an email to ${currentUserTesting()} with password reset link.`)} />
      </View>

      </View>
      </View>
    );
  }
}
