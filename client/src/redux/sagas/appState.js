import {put,call} from 'redux-saga/effects';
import {getUserSession, login,singup} from '../../utils/http/userInfoRequest';
import {getUserSessionSuccessAction} from '../action/appState'
import 'whatwg-fetch';

export function* getUserSessionAsync() {
  // ajax
  const json = yield call(getUserSession, 'getUserSession');
  if (json) {
    yield put(getUserSessionSuccessAction(json));
  } else {
    console.log("error:",);
    // 发起 loginFailureAction
    // yield put(loginFailureAction(json.error));
  }
}