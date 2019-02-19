import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import AppReducer from './AppReducer';
import ListContactsReducer from './ListContactsReducer';
import ListConversation from './ListConversation';
import ListChatsReducer from './ListChatsReducer';

export default combineReducers({
   AuthReducer,
   AppReducer,
   ListContactsReducer,
   ListConversation,
   ListChatsReducer
});
