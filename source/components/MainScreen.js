import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Image } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import ChatsScane from './ChatsScene';
import StatusScane from './StatusScene';
import CallsScane from './CallsScane';

const SCREEN_WIDTH = Dimensions.get('window').width;
const TAB_BAR_WIDTH = (90 * SCREEN_WIDTH) / 100; //90% of screen
const CAMERA_WIDTH = (10 * SCREEN_WIDTH) / 100; //10% of screen

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};


export default class MainScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'CHATS' },
      { key: 'second', title: 'STATUS' },
      { key: 'third', title: 'CALLS' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    first: ChatsScane,
    second: StatusScane,
    third: CallsScane,
  });

  render() {
    return (
      <TabViewAnimated
      style={styles.container}
      navigationState={this.state}
      renderScene={this._renderScene}
      renderHeader={this._renderHeader}
      onIndexChange={this._handleIndexChange}
      initialLayout={initialLayout}
      />
    );
  }
}



class TabBarMenu extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#115E54', elevation: 3, marginBottom: 3 }}>
      <StatusBar backgroundColor="#114D44" />

      <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 18 }}>Whatsapp</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>

      <View style={{ width: CAMERA_WIDTH, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../images/PhotoCameraIcon.png')} style={{ height: 20, width: 20 }} />
      </View>

      <View style={{ alignItems: 'flex-end' }}>
      <TabBar {...this.props} style={{ width: TAB_BAR_WIDTH, elevation: 0, backgroundColor: '#115E54' }} />
      </View>

      </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
