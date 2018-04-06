import error from '../errorMsg'
import 'whatwg-fetch';

export const getUserSession = () => {
    console.log('getUserSession:::::');
    return fetch('/api/user/',{
        // credentials: 'include',
        method: 'get',
        mode: 'cors',
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded",
            'Accept':  'application/json',
                'Content-Type':  'application/json',
            'Authorization':  'access_token',
        //     'Accept': 'application/x-www-form-urlencoded',
        //   'Access-Control-Allow-Origin':'*',
        //   "Access-Control-Allow-Headers": "*",
        //   'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        //   'token': 'Cl5bxjcUt+gDtIDJY4wDgZKNoYdMcgjKQQKXga/UKtmpfniucZTeKaf5mUjsm7uc'
        }
    })
        .then(res => res.json())
        .then((customerInfo) => {
            return customerInfo;
        })
        .catch((err) => {
            console.log('err:', err);
        });
}

function login(userInfo) {
    if (!userInfo) {
        return error(-2);
    }
    // let formData = new FormData();  
    // formData.append("userName",userInfo.userName);  
    // formData.append("email",userInfo.email);  
    // formData.append("password",userInfo.password);  

    let data = 
    JSON.stringify({
        'userName': userInfo.userName,
        'email': userInfo.email,
        'password': userInfo.password,
    });


    fetch('api/user/login', {
        // credentials: 'include',
        method: 'POST',
        body: data,
        // mode: 'cors',
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        //     'Accept': 'application/x-www-form-urlencoded',
        //   'Access-Control-Allow-Origin':'*',
        //   'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        //   'token': 'Cl5bxjcUt+gDtIDJY4wDgZKNoYdMcgjKQQKXga/UKtmpfniucZTeKaf5mUjsm7uc'
        }
    })
        .then(res => res.json())
        .then(
            (data) => {
            })
        .catch(err => console.log('fetch is failed with error:', err));

}

function singup(userInfo) {
    let result = {};
    if (!userInfo) {
        return error(-2);
    }
    const data = JSON.stringify({
        'userName': userInfo.userName,
        'email': userInfo.email,
        'password': userInfo.password,
    });

    fetch('http://www.chenleic9898.com/api/user/signup', {
        credentials: 'include',
        method: 'post',
        body: data,
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(
            (data) => {
                result = data;
            })
        .catch(err => console.log('fetch is failed with error:', err));

    return result;
}

export default {
    getUserSession,
    login,
    singup,
};