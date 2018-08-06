import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Image, TouchableHighlight } from 'react-native';
import { changeMessage, sendMessage } from '../actions/AppActions';

class Chat extends Component {
  /* Component Context */
  _sendMessage() {
    const { message, contactName, contactEmail } = this.props;
    this.props.sendMessage(message, contactName, contactEmail)
  }

  render(){
    console.log(this.props);
    return (
      <View style={{ flex: 1, marginTop: 5, backgroundColor: '#eee4dc', padding: 10 }}>

      <View style={{ flex: 1, paddingBottom: 20 }}></View>

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
  return ({
    message: state.AppReducer.message
  })
}

export default connect(mapStateToProps, { changeMessage, sendMessage })(Chat);
