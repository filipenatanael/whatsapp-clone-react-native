import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStone } from 'redux';

import Routes from './Routes';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider stone={createStone(reducers)}>
        <Routes />
      </Provider>
    );
  }
}
