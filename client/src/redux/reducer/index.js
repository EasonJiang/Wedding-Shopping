import {combineReducers} from 'redux';
import {userReducer} from './appState';

export const rootReducer = combineReducers({userReducer:userReducer});