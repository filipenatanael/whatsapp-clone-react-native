import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { View, Text, TextInput, Image, TouchableHighlight, ListView } from 'react-native';
import { changeMessage, sendMessage, userConversationFetch } from '../actions/AppActions';

class Chat extends Component {

  componentWillMount() {
    this.props.userConversationFetch(this.props.contactEmail);
    this.createDataSource(this.props.conversation);
  }

  /* Component Context */
  _sendMessage() {
    const { message, contactName, contactEmail } = this.props;
    this.props.sendMessage(message, contactName, contactEmail)
  }

  createDataSource(conversation) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(conversation);
    // this.dataSource is a variable on scope of this class
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.conversation);
  }

  renderRow(text) {
    return (
      <View>
        <Text>{text.message}</Text>
        <Text>{text.type}</Text>
      </View>
    )
  }

  render(){
    return (
      <View style={{ flex: 1, marginTop: 5, backgroundColor: '#eee4dc', padding: 10 }}>

      <View style={{ flex: 1, paddingBottom: 20 }}>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
      </View>

      <View style={{ flexDirection: 'row', height: 60 }}>
        <TextInput
          value={this.props.message}
          onChangeText={ text => this.props.changeMessage(text) }
          underlineColorAndroid='transparent'
          style={{ flex: 4, backgroundColor: '#fff', fontSize: 15, borderRadius: 30 }}
        />

        <TouchableHighlight
          onPress={ this._sendMessage.bind(this) }
          underlayColor='#fff'>
          <Image source={require('../images/ic_button_send_sms.png')} style={{ width: 60, height: 60, marginLeft: 5 }} />
        </TouchableHighlight>
      </View>

      </View>
    )
  }
}

mapStateToProps = state => {

  const conversation = _.map(state.ListConversation, (val, uid) => {
    return { ...val, uid };
  })

  console.log(conversation);

  return ({
    conversation,
    message: state.AppReducer.message
  })
}

export default connect(mapStateToProps, { changeMessage, sendMessage, userConversationFetch })(Chat);
