import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { addName, addEmail, addPassword, registerUser } from '../actions/AuthActions';

class SignUpScreen extends Component {

  _registerUser() {
    const { name, email, password } = this.props;
    this.props.registerUser({ name, email, password });
  }

  renderRegisterButton() {
    if (this.props.signUpLoading) {
      return (<ActivityIndicator size="large" color="#00ff00" />)
    }
    return (<Button title="SignUp" color='green' onPress={() => this._registerUser()} />)
  }

  render() {
    return (
      <ImageBackground source={require('../images/ic_log_in_background.png')} style={{ flex: 1, width: null }}>
      <View style={styles.container}>
         <View style={styles.formGroup}>

            <Text style={{ fontSize: 20, color: 'red' }}>{ this.props.message }</Text>

            <TextInput
            placeholder='Name:'
            placeholderTextColor='#fff'
            style={styles.textInput}
            value={this.props.name}
            onChangeText={name => this.props.addName(name)}
            />
            <TextInput
            placeholder='Email:'
            placeholderTextColor='#fff'
            style={styles.textInput}
            value={this.props.email}
            onChangeText={email => this.props.addEmail(email)}
            />
            <TextInput
            placeholder='Password:'
            placeholderTextColor='#fff'
            style={styles.textInput}
            value={this.props.password}
            onChangeText={password => this.props.addPassword(password)}
            />
         </View>
         <View style={styles.btnSignUp}>
              { this.renderRegisterButton() }
         </View>
      </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => (
  {
    name: state.AuthReducer.name,
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    message: state.AuthReducer.message,
    signUpLoading: state.AuthReducer.signUpLoading
  }
)

export default connect(
  mapStateToProps,
  {
    addName,
    addEmail,
    addPassword,
    registerUser
  }
)(SignUpScreen);

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
