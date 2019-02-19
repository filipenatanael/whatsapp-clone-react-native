import React, { Component } from 'react';
import firebase from 'firebase';
import base64 from 'base-64';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { View, Text, ListView, Image, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import { fetchContacts } from  '../actions/AppActions';

class SelectContact extends Component {

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
    if (contact.name === 'New Contact' || contact.name === 'New Group') {
      return (
        <View style={{ flex: 1,  flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderColor: "#b7b7b7" }}>
          <Image source={{uri: contact.profileImage }} style={{ width: 50, height: 50, borderRadius: 50 }} />
            <View style={{ marginLeft: 15, marginTop: 8 }}>
              <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{ contact.name }</Text>
            </View>
        </View>
      )
    }
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

  const fakeContacts = [
    {
      email: 'newContacts@whats.com',
      name: 'New Contact',
      profileImage: 'https://cdn.onlinewebfonts.com/svg/img_162044.png',
      uid: '2asda20df8df889'
    },
    {
      email: 'newGroup@whats.com',
      name: 'New Group',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__YCeBJfBkq2YAXzSFw7yCHru7zIYvO7sF9JmQPmYhGOEzUee',
      uid: '1asd90a8d90as8d'
    }
  ]

  contacts.push(fakeContacts[0]);
  contacts.push(fakeContacts[1]);

  contacts.reverse();

  return {
    email_logged_in: state.AppReducer.email_logged_in,
    contacts: contacts
  }
}

export default connect(mapStateToProps, { fetchContacts })(SelectContact);
