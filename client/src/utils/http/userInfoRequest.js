import error from '../errorMsg'
import 'whatwg-fetch';
import request, {get,post} from '../request';

export const getUserSession = () => {
    console.log('getUserSession:::::');
    return get('api/user')
}

export const  login= async (userInfo) =>{
    
    if (!userInfo) {
        return error(-2);
    }
    return post('api/user/login',userInfo);
}

export const  singup = (userInfo)=> {
    console.log('signup---',userInfo);
    let result = {};
    if (!userInfo) {
        return error(-2);
    }
    
    
    return post('api/user/signup',userInfo);
}

// export default {
//     getUserSession,
//     login,
//     singup,
// };