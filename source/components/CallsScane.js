import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import { userContactsFetch } from '../actions/AppActions'

class CallsScene extends Component {

   componentWillMount() {
     const { currentUser } = firebase.auth();
     this.props.userContactsFetch(currentUser.email);
   }


  render() {
    return (
      <View>
      <Text>Status</Text>
      <Button title="teste" onPress={() => this.props.userContactsFetch()} />
      </View>
    );
  }
}


export default connect(null, { userContactsFetch })(CallsScene);
