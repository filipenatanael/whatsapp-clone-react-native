import React, { Component } from 'react';
import firebase from 'firebase';
import base64 from 'base-64';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { View, Text, ListView, Image, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import {
  fetchAllChats
 } from  '../actions/AppActions';

class ChatsList extends Component {

  componentWillMount() {
    this.props.fetchAllChats(base64.encode(this.props.email_logged_in));
    this.createDataSource(this.props.chatsList);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.chatsList);
  }

  createDataSource(chatsList) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.dataSource = ds.cloneWithRows(chatsList)
    // (this.dataSource) CallScane.prototype.dataSource (example)
  }

  renderRow(chatContent) {
    return (
      <TouchableHighlight
        onPress={ () => Actions.chat({
          title: chatContent.name,
          contactName: chatContent.name,
          contactEmail: chatContent.email
        }) }
      >
      <View style={{ flex: 1,  flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderColor: "#b7b7b7" }}>
        <Image source={{uri: chatContent.profileImage }} style={{ width: 50, height: 50, borderRadius: 50 }} />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{ chatContent.name }</Text>
            <Text style={{ fontSize: 13 }}>{ chatContent.lastMessage }</Text>
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
  return {
    email_logged_in: state.AppReducer.email_logged_in,
    chatsList: state.ListChatsReducer
  }
}

export default connect(mapStateToProps, { fetchAllChats })(ChatsList);
