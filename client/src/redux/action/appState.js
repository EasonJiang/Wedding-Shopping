import {actionTypes} from './actionTypes';

export const getUserSessionAction = (data) => {
  
    return {
      type: actionTypes.GET_USER_SESSION,
      data: data,
    }
  };

  export const getUserSessionSuccessAction = (data) => {
    console.log('&&&&&&&&',JSON.stringify(data));
    return {
      type: actionTypes.GET_USER_SESSION_SUCCESS,
      data: data,
    }
  };