import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  addContact,
  registerNewContact
} from '../actions/AppActions';

class AddContactScreen extends Component {

  renderAddContact() {
    if (!this.props.add_contact_status) {
        return (
          <View style={{ flex: 1 }}>
            <View style={styles.formGroup}>
              <TextInput
                placeholder='Email'
                style={{ fontSize: 18, height: 40 }}
                value={this.props.email_contact}
                onChangeText={(email) => this.props.addContact(email)}
              />
            </View>

            <View style={styles.btnSeed}>
              <Button
                title="Seed"
                onPress={() => this.props.registerNewContact(this.props.email_contact)}
              />
              <View style={{ marginTop: 10, alignItems: 'center' }}>
              <Text style={{ fontSize: 18, color: 'red' }}>{ this.props.add_contact_error }</Text>
              </View>
            </View>
          </View>
        );
    } else {
        return (
          <View>
              <Text style={{ fontSize: 20 }}>Registered successfully</Text>
          </View>
        );
    }
  }

  render() {
    return (
      <View style={styles.container}>
          { this.renderAddContact() }
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    email_contact: state.AppReducer.email_contact,
    add_contact_error: state.AppReducer.add_contact_error,
    add_contact_status: state.AppReducer.add_contact_status
  }
);

export default connect(
  mapStateToProps, {
    addContact,
    registerNewContact
  })(AddContactScreen);

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
