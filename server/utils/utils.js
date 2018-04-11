import crypto from 'crypto';

module.exports = {
    MD5_SUFFIX: 'kkwhejwjerkwjr8938948345305so;kdfl;ksfsdf;df;glnndknkld',
    md5: (pwd) => {
        let md5 = crypto.createHash('md5');
        return md5.update(pwd).digest;
    },
    responseMessage : (res,http_code=500, code=3, message="server error", data={}) => {
        let jsonData = {code,message, data};
         res.status(http_code).json(jsonData);
    }
};