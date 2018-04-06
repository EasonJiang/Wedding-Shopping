import { takeLatest } from 'redux-saga/effects';
import {getUserSessionAsync} from './appState';
import {actionTypes} from '../action/actionTypes';

export default function* rootSaga() {
  yield [
    takeLatest(actionTypes.GET_USER_SESSION, getUserSessionAsync),
  ];
}