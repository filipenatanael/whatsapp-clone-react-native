import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.title}>
            <Text style={styles.textTitle}>Whatsapp Clone</Text>
         </View>

         <View style={styles.formGroup}>
            <TextInput
            value={this.props.email}
            placeholder='Email:'
            style={styles.textInput}
            />
            <TextInput
            value={this.props.password}
            placeholder='Password:'
            style={styles.textInput}
            />
            <TouchableHighlight onPress={() => Actions.signUpScreen()}>
            <Text style={styles.textRegister}>New to Whatsapp? Sign up now »</Text>
            </TouchableHighlight>
         </View>

         <View style={styles.btnLogIn}>
            <Button title="Log in" color='green' onPress={() => false} />
         </View>
      </View>
    );
  }
}

const mapsStateToProps = state => (
  {
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
  }
)

export default connect(mapsStateToProps, null)(LoginScreen);

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
