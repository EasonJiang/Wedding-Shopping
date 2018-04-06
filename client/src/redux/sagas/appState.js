import {put,call} from 'redux-saga/effects';
import {getUserSession, login,singup} from '../../utils/http/userInfoRequest';
import {getUserSessionSuccessAction,userLoginSuccessAction} from '../action/appState'
import 'whatwg-fetch';

//get user information
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


//user login
export function* userLogAsync(userInfo) {
  // ajax
  const json = yield call(login, userInfo.userInfo);
  if (json) {
    yield put(userLoginSuccessAction(json));
  } else {
    console.log("error:",);
    // 发起 loginFailureAction
    // yield put(loginFailureAction(json.error));
  }
}