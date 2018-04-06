import { actionTypes } from '../action/actionTypes';
const initialState = {
    userInfo: {}
};

export function userReducer(state = initialState, action) {
    console.log('reducer::::::::', action.type,action.userInfo);
    switch (action.type) {
        case actionTypes.GET_USER_SESSION:
            return { ...state, userInfo: action.userInfo }
        case actionTypes.GET_USER_SESSION_SUCCESS:
            return { ...state, userInfo: action.userInfo }
        case actionTypes.USER_LOGIN:
            return { ...state, userInfo: action.userInfo }
        case actionTypes.USER_LOGIN_SUCCESS:
            return { ...state, userInfo: action.userInfo }
        default:
            return state;
    }
}

