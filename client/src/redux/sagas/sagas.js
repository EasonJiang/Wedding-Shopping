import { takeLatest } from 'redux-saga/effects';
import {getUserSessionAsync,userLogAsync} from './appState';
import {actionTypes} from '../action/actionTypes';

export default function* rootSaga() {
  yield [
    takeLatest(actionTypes.GET_USER_SESSION, getUserSessionAsync),
    takeLatest(actionTypes.USER_LOGIN, userLogAsync),
  ];
}