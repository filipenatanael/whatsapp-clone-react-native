import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addContact, registerNewContact } from '../actions/AppActions';

//export default props => ()

const AddContactScreen = props => (
  <View style={styles.container}>
      <View style={styles.formGroup}>
        <TextInput
        placeholder='Email'
        style={{ fontSize: 18, height: 40 }}
        value={props.contactEmail}
        onChangeText={(email) => props.addContact(email)}
        />
      </View>

      <View style={styles.btnSeed}>
        <Button
        title="Seed"
        onPress={() => props.registerNewContact(props.contactEmail)}
        />
        <View style={{ marginTop: 10, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, color: 'red' }}>{ props.addContactError }</Text>
        </View>
      </View>
  </View>
);


const mapStateToProps = state => (
  {
    contactEmail: state.AppReducer.emailContact,
    addContactError: state.AppReducer.addContactError
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
