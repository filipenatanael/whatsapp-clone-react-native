import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableHighlight } from 'react-native';

export default class Chat extends Component {
  render(){
    return (
      <View style={{ flex: 1, marginTop: 10, backgroundColor: '#eee4dc', padding: 10 }}>

      <View style={{ flex: 1, paddingBotton: 5 }}></View>

      <View style={{ flexDirection: 'row', height: 60 }}>
        <TextInput
          underlineColorAndroid='transparent'
          style={{ flex: 4, backgroundColor: '#fff', fontSize: 15, borderRadius: 30 }}
        />

        <TouchableHighlight onPress={() => false } underlayColor='#fff'>
          <Image source={require('../images/ic_button_send_sms.png')} style={{ width: 60, height: 60, marginLeft: 5 }} />
        </TouchableHighlight>
      </View>

      </View>
    )
  }
}
