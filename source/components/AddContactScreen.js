import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addContact, registerNewContact } from '../actions/AppActions';

/* export default props => ()
const AddContactScreen = props => ( */
class AddContactScreen extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formGroup}>
          <TextInput
          placeholder='Email'
          style={{ fontSize: 18, height: 40 }}
          value={props.email_contact}
          onChangeText={(email) => props.addContact(email)}
          />
        </View>

        <View style={styles.btnSeed}>
          <Button
          title="Seed"
          onPress={() => props.registerNewContact(props.email_contact)}
          />
          <View style={{ marginTop: 10, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, color: 'red' }}>{ props.add_contact_error }</Text>
          </View>
        </View>
      </View>
    );
  }
}

  const mapStateToProps = state => (
    {
      email_contact: state.AppReducer.email_contact,
      add_contact_error: state.AppReducer.add_contact_error,
      add_contact_success: state.AppReducer.add_contact_success
    }
  );

  export default connect(mapStateToProps, { addContact, registerNewContact })(AddContactScreen);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    formGroup: {
      flex: 1,
      justifyContent: 'center'
    },
    btnSeed: {
      flex: 1,
    }
  });
