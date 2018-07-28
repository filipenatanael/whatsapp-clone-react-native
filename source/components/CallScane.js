import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import { fetchContacts } from '../actions/AppActions'

class CallScane extends Component {

   componentWillMount() {
     // const { currentUser } = firebase.auth();
     // this.props.fetchContacts(currentUser.email);
   }


  render() {
    return (
      <View>
      <Text>Status</Text>

      </View>
    );
  }
}


export default connect(null, { fetchContacts })(CallsScene);
