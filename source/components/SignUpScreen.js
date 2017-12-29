import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.formGroup}>
            <TextInput placeholder='Name:' style={styles.textInput} />
            <TextInput placeholder='Email:' style={styles.textInput} />
            <TextInput placeholder='Password:' style={styles.textInput} />
         </View>
         <View style={styles.btnSignUp}>
            <Button title="SignUp" color='green' onPress={() => false} />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 10,
   },
   formGroup: {
     flex: 4,
     justifyContent: 'center',
   },
   textInput: {
     fontSize: 18,
     height: 45
   },
   btnSignUp: {
     flex: 1
   }
});
