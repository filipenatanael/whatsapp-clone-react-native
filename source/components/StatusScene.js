import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { userContactsFetch } from '../actions/AppActions'

class StatusScene extends Component {

  componentWillMount() {
    this.props.userContactsFetch();
  }

  render() {
    return (
      <View>
      <Text>Status</Text>
      </View>
    );
  }
}


export default connect(null, { userContactsFetch })(StatusScene);
