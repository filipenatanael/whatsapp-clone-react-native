import { combineReducers } from 'redux';

import _AuthReducer from './AuthReducer';

export default combineReducers({
   AuthReducer: _AuthReducer,
   reducer2: () => []
});
