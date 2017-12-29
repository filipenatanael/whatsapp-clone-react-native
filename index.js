import React from 'react';
import { AppRegistry } from 'react-native';
import App from './source/App';

const whatsapp = props => (
  <App />
)

AppRegistry.registerComponent('WhatsappCloneInReactNative', () => whatsapp);
