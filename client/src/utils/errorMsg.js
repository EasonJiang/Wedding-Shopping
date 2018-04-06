import ERROR_MSG from '../configs/error'
export default function error(type) {
    switch (type) {
        case -1:
            return { code: type, message: ERROR_MSG.USER_EXISTENCE, data: {} }
        case -2:
            return { code: type, message: ERROR_MSG.USER_NAME_ERROR, data: {} }
        case -3:
            return { code: type, message: ERROR_MSG.PWD_ERROR, data: {} }
        case -4:
            return { code: type, message: ERROR_MSG.EMAIL_ERROR, data: {} }
        default:
            return {code:-100,message:ERROR_MSG.COMMON_ERROR,data:{}}
    }
}