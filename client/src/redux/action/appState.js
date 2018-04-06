import {actionTypes} from './actionTypes';

/**
 * get user session
 * @param {} userInfo 
 */
export const getUserSessionAction = (userInfo) => {
  
    return {
      type: actionTypes.GET_USER_SESSION,
      userInfo: userInfo,
    }
  };

  export const getUserSessionSuccessAction = (userInfo) => {
    console.log('&&&&&&&&',JSON.stringify(userInfo));
    return {
      type: actionTypes.GET_USER_SESSION_SUCCESS,
      userInfo: userInfo,
    }
  };

  /**
   * 
   */
  export const userLoginAction = (userInfo) => {
    console.log('userLoginAction+++++',userInfo);
    return {
      type: actionTypes.USER_LOGIN,
      userInfo: userInfo,
    }
  };

  export const userLoginSuccessAction = (userInfo) => {
    console.log('userLoginSuccessAction::',JSON.stringify(userInfo));
    return {
      type: actionTypes.USER_LOGIN_SUCCESS,
      userInfo: userInfo,
    }
  };