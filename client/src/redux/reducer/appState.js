import {actionTypes} from '../action/actionTypes';
const initialState = {
    data:{}
  };

export function userReducer(state = initialState,action){
    console.log('reducer::::::::',action.data);
    switch(action.type){
        case actionTypes.GET_USER_SESSION :
            return {...state,data:action.data}
            case actionTypes.GET_USER_SESSION_SUCCESS :
            return {...state,data:action.data}
        default:
            return state;
    }
}

