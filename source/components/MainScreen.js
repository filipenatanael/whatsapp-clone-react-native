import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import CameraScane from './CameraScane';
import ChatsScane from './ChatsScene';
import StatusScane from './StatusScene';
import CallsScane from './CallsScane';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};


export default class MainScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: '' },
      { key: 'second', title: 'CHATS' },
      { key: 'third', title: 'STATUS' },
      { key: 'fourth', title: 'CALLS' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    first: CameraScane,
    second: ChatsScane,
    third: StatusScane,
    fourth: CallsScane,
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
      <View style={{ backgroundColor: '#115E54', elevation: 4, marginBottom: 6 }}>

      <StatusBar backgroundColor="#114D44" />

      <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 18 }}>Whatsapp Clone</Text>
      </View>

      <TabBar {...this.props} style={{ backgroundColor: '#115E54' }} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
