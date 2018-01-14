import { combineReducers } from 'redux';

import _AuthReducer from './AuthReducer';
import _AppReducer from './AppReducer';

export default combineReducers({
   AuthReducer: _AuthReducer,
   AppReducer: _AppReducer,
});
