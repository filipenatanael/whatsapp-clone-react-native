import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class Chat extends Component {
  render(){
    return (
      <View style={{ flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 }}>

      <View style={{ flex: 1, paddingBotton: 20  }}></View>

      <View style={{ flexDirectio: 'row', height: 60 }}>
        <TextInput
          underlineColorAndroid='transparent'
          style={{ flex: 4, backgroundColor: '#fff', fontSize: 15, borderRadius: 30 }}
        />
      </View>

      </View>
    )
  }
}
