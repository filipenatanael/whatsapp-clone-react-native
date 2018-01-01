import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.formGroup}>
            <TextInput placeholder='Name:' style={styles.textInput} value={this.props.name} />
            <TextInput placeholder='Email:' style={styles.textInput} value={this.props.email} />
            <TextInput placeholder='Password:' style={styles.textInput} value={this.props.password} />
         </View>
         <View style={styles.btnSignUp}>
            <Button title="SignUp" color='green' onPress={() => false} />
         </View>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    name: state.AuthReducer.name,
    email: state.AuthReducer.email,
    password: state.AuthReducer.password
  }
)

export default connect(mapStateToProps, null)(SignUpScreen);

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
