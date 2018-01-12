import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';


const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const ChatsRoute = () => <View style={[styles.container, { backgroundColor: '#ff4081' }]} />;
const StatusRoute = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]} />;

export default class MainScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'CHATS' },
      { key: 'second', title: 'STATUS' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: ChatsRoute,
    second: StatusRoute,
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


class ClassName extends Component{
  render() {
    return (
      <View>
        <Text>Whatsapp Clone</Text>
        <TabBat { ...props }/>
      <View>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
