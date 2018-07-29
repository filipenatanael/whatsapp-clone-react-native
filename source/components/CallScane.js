import firebase from 'firebase';
import React, { Component } from 'react';
import _ from 'lodash';
import base64 from 'base-64';
import { View, Text, ListView } from 'react-native';

import { connect } from 'react-redux';
import { fetchContacts } from '../actions/AppActions'

class CallScane extends Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

    this.state = {
      dataSourceRef: ds.cloneWithRows([
      'Registry 1',
      'Registry 2',
      'Registry 3',
      'Registry 4',
      'Registry 5'
    ])
  }
  }

  componentWillMount() {
    this.props.fetchContacts(base64.encode(this.props.email_logged_in));
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSourceRef}
        renderRow={data => <View><Text>{ data }</Text></View>}
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
  }
}

export default connect(mapStateToProps, { fetchContacts })(CallScane);
