import firebase from 'firebase';
import React, { Component } from 'react';
import base64 from 'base-64';
import _ from 'lodash';
import { View, Text, ListView } from 'react-native';

import { connect } from 'react-redux';
import { fetchContacts } from '../actions/AppActions'

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
    // CallScane.prototype.dataSource (example)
  }

  render() {
    return (
      <ListView
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={data => {
        return (
          <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: "#b7b7b7" }}>
            <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{ data.name }</Text>
            <Text>{ data.email }</Text>
          </View>
        )
      }
    }
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
