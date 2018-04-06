/**
 * response code:
-1: already register
-2: userName is incorrect
-3: pwd is incorrect
-4: email is incoorect
-100: Server error
0: login sucessful
1: need to login
2: logined
 */
const errorInfo = " is not correct";
const PWD_ERROR = "password" + errorInfo;
const USER_NAME_ERROR = "user name" + errorInfo;
const EMAIL_ERROR = "Email" + errorInfo;
const USER_EXISTENCE = "You already register";
const COMMON_ERROR = "Server error";
export default {PWD_ERROR,USER_NAME_ERROR,EMAIL_ERROR,USER_EXISTENCE,COMMON_ERROR};