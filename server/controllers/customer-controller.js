import db from '../models';
import { MD5_SUFFIX, md5, responseMessage } from '../utils/utils';
import jwt from "jsonwebtoken";
const customerContoller = {};

customerContoller.customerSession = (req, res, next) => {
    console.log('login ..........req.req.session:', req.session);
    if (req && req.session && req.session.customerInfo) {
        responseMessage(res, 200, 4, 'already Login');
        return;
    }
    responseMessage(res, 200, 3, 'please Login');
}
/**
 * User Login
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
customerContoller.login = (req, res, next) => {
    console.log('login ..........req.body:', req.body);
    const { userName, password } = req.body;
    if (!userName || !password) {
        responseMessage(res, 200, -1, 'User Name or Password can not empty');
        return;
    }
    db.customerInfos.findOne({
        userName,
        password: md5(password) + MD5_SUFFIX,
    }).then((customerInfo) => {
        if (!customerInfo) {
            responseMessage(res, 200, -1, 'User or password is not correct');
            return;
        }

        let data = {};
        let authToken = jwt.sign({
            username: customerInfo.userName,
            password: md5(password) + MD5_SUFFIX
        },
            "secret");
        data = { token: authToken, userInfo: customerInfo }
        responseMessage(res, 200, 0, 'Login sucessfull', data);
        return;

    }).catch((err) => {
        console.log('err:', err);
        responseMessage(res);
    })
};

/**
 * user Signup
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
customerContoller.singUp = (req, res, next) => {
    const { userName, email, password, address, phoneNumber } = req.body;
    console.log('post req.body:', req.body);
    if (!userName || !password || !email) {
        responseMessage(res, 400, 2, 'User Name or Password or email  can not empty');
        return;
    }

    db.customerInfos.findOne({
        email
    }).then((customerInfo) => {
        if (customerInfo) {
            console.log('customerInfo:', customerInfo)
            /* customer already regisered */
            responseMessage(res, 200, -1, 'You already regisered.please Login');
            return;
        } else {
            /* save customer information */
            const customerInfos = new db.customerInfos({
                type: 2,
                userName,
                password: md5(password) + MD5_SUFFIX,
                email,
            });
            customerInfos.save()
                .then((customerInfo) => {
                    let data = {};
                    let authToken = jwt.sign({
                        username: customerInfo.userName,
                        password: md5(password) + MD5_SUFFIX
                    },
                        "secret");
                    data = { token: authToken, userInfo: customerInfo }
                    responseMessage(res, 200, 0, 'signup sucessful', data);
                }).catch(err => responseMessage(res));
        }
    }).catch(err => responseMessage(res));



};

export default customerContoller;