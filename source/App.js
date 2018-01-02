import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import { config } from './resources/MyFirebaseSettings';

import Routes from './Routes';
import reducers from './reducers/index';

export default class App extends Component<{}> {

  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

/*
<Provider store={createStore(combineReducers({
   AuthReducer: _AuthReducer,
   reducer2: () => []
})
)}>
*/
