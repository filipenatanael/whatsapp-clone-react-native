import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.title}>
            <Text style={styles.textTitle}>Whatsapp Clone</Text>
         </View>

         <View style={styles.formGroup}>
            <TextInput
            placeholder='Email:'
            style={styles.textInput}
            />
            <TextInput
            placeholder='Password:'
            style={styles.textInput}
            />
            <Text style={styles.textRegister}>New to Whatsapp? Sign up now »</Text>
         </View>

         <View style={styles.btnLogIn}>
            <Button title="Log in" color='green' onPress={() => false} />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
    },
    title: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textTitle: {
     fontSize: 30
    },
    formGroup: {
      flex: 2,
    },
    textInput: {
      fontSize: 18,
      height: 45
    },
    textRegister: {
      fontSize: 16
    },
    btnLogIn: {
      flex: 2,
    }
});
