import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
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
      </View>
  </View>
);


const mapStateToProps = state => (
  {
    contactEmail: state.AppReducer.emailContact,
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
