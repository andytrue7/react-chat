import { combineReducers, createStore } from 'redux';
import messageReducer from '../containers/Chat/reducers';

let reducers = combineReducers({
    messages: messageReducer
});

let store = createStore(reducers);

export default store;

