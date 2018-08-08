import React, { Component } from 'react';
import { View, Text, Dimensions, StatusBar, Image, TouchableOpacity } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { enableInclusionContact } from '../actions/AppActions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const TAB_BAR_WIDTH = (90 * SCREEN_WIDTH) / 100; //90% of screen
const TAB_AND_INDICATOR_WIDTH = TAB_BAR_WIDTH / 3;
const CAMERA_WIDTH = (10 * SCREEN_WIDTH) / 100; //10% of screen

class TabBarMenu extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#115E54', elevation: 3, marginBottom: 3 }}>
        <StatusBar backgroundColor="#114D44" />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ height: 50, justifyContent: 'center', marginLeft: 20 }}>
          <Text style={{ color: 'white', fontSize: 19 }}>Whatsapp</Text>
          </View>

          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <View style={{ width: 35, justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => { Actions.addContactScreen(); this.props.enableInclusionContact(); }}>
                    <Image source={require('../images/ic_magnifying_glass.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Image source={require('../images/ic_menu_application.png')} />
            </View>
            </View>
          </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: CAMERA_WIDTH, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => alert('this is a camera!')}>
            <Image source={require('../images/ic_photo_camera.png')} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'flex-end' }}>
            <TabBar {...this.props} style={{ width: TAB_BAR_WIDTH, elevation: 0, backgroundColor: '#115E54' }} indicatorStyle={{ width: TAB_AND_INDICATOR_WIDTH }} tabStyle={{ width: TAB_AND_INDICATOR_WIDTH }} />
          </View>
        </View>
      </View>
    );
  }
}

export default connect(null, { enableInclusionContact })(TabBarMenu);
