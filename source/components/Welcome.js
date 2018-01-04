import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


export default class Welcome extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>

      <View style={{ flex: 2 }}>
      <Text>Welcome to Whatsapp Clone!</Text>
      </View>

      <View style={{ flex: 1 }}>
      <Button title="SignUp..." onPress={() => false} />
      </View>

      </View>
    );
  }
}
