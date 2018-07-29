import firebase from 'firebase';
import React, { Component } from 'react';
import _ from 'lodash';
import base64 from 'base-64';
import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import { fetchContacts } from '../actions/AppActions'

class CallScane extends Component {

   componentWillMount() {
      this.props.fetchContacts(base64.encode(this.props.email_logged_in));
   }

  render() {
    return (
      <View>
      <Text>Status</Text>

      </View>
    );
  }
}

mapStateToProps = state => {
  console.log(state);
  const contacts = _.map(state.ListContactsReducer, (value, uid) => {
    return { ...value, uid }
  });
  console.log(contacts);
  return {
      email_logged_in: state.AppReducer.email_logged_in,
  }
}

export default connect(mapStateToProps, { fetchContacts })(CallScane);
