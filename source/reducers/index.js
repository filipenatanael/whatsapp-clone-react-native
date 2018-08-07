import { combineReducers } from 'redux';

import _AuthReducer from './AuthReducer';
import _AppReducer from './AppReducer';
import _ListContactsReducer from './ListContactsReducer';
import _ListConversation from './ListConversation'

export default combineReducers({
   AuthReducer: _AuthReducer,
   AppReducer: _AppReducer,
   ListContactsReducer: _ListContactsReducer,
   ListConversation: _ListConversation
});
