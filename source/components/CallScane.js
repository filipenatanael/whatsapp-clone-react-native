import React, { Component } from 'react';
import firebase from 'firebase';
import base64 from 'base-64';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { View, Text, ListView, Image, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import { fetchContacts } from  '../actions/AppActions';

class CallScane extends Component {

  componentWillMount() {
    this.props.fetchContacts(base64.encode(this.props.email_logged_in));
    this.createDataSource(this.props.contacts);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.contacts);
  }

  createDataSource(contacts) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.dataSource = ds.cloneWithRows(contacts)
    // (this.dataSource) CallScane.prototype.dataSource (example)
  }

  renderRow(contact) {
    return (
      <TouchableHighlight
        onPress={ () => Actions.chat({ title: contact.name, contactName: contact.name, contactEmail: contact.email }) }
      >
      <View style={{ flex: 1,  flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderColor: "#b7b7b7" }}>
        <Image source={{uri: contact.profileImage }} style={{ width: 50, height: 50, borderRadius: 50 }} />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{ contact.name }</Text>
            <Text style={{ fontSize: 13 }}>{ contact.email }</Text>
          </View>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={data => this.renderRow(data)}
    />
  );
}
}

mapStateToProps = state => {
  const contacts = _.map(state.ListContactsReducer, (value, uid) => {
    return { ...value, uid }
  });

  return {
    email_logged_in: state.AppReducer.email_logged_in,
    contacts: contacts
  }
}

export default connect(mapStateToProps, { fetchContacts })(CallScane);
