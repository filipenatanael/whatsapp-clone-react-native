import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default props => (
  <View style={styles.Container}>

  <View>
  <Text style={{ fontSize: 50 }}>Whatsapp Chats</Text>
  <Text style={{ fontSize: 50 }}>Whatsapp Chats</Text>
  <Text style={{ fontSize: 50 }}>Whatsapp Chats</Text>
  <Text style={{ fontSize: 50 }}>Whatsapp Chats</Text>
  <Text style={{ fontSize: 50 }}>Whatsapp Chats</Text>
  <Text style={{ fontSize: 50 }}>Whatsapp Chats</Text>
  <Text style={{ fontSize: 50 }}>Whatsapp Chats</Text>
  <Text style={{ fontSize: 50 }}>Whatsapp Chats</Text>
  </View>

  <TouchableOpacity activeOpacity={0.5} onPress={() => alert('Clicked!!')} style={styles.TouchableOpacityStyle} >
  <Image source={require('../images/ic_chats_contacts.png')} style={styles.FloatingButtonStyle} />
  </TouchableOpacity>

  </View>
)

const styles = StyleSheet.create({

  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#F5F5F5'
  },

  TouchableOpacityStyle:{

    position: 'absolute',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {

    resizeMode: 'contain',
    width: 55,
    height: 55,
  }
});
