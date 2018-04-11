const expireTime = 10000 * 60;
import { responseMessage } from './utils';
module.exports = function (err,req, res, next) {

if (err.name === "UnauthorizedError") {
  responseMessage(res, 401, -1, 'invalid token');
  }
};