const expireTime = 10000 * 60;

module.exports = function (req, res, next) {
  res.header('Access-Control-Expose-Headers', 'access-token');
  const now = Date.now();

  let unauthorized = true;
  /**
   * Get the access-token from the request, and verfy if the token is expired
   */
  const token = req.headers['access-token'];
  if (token) {
    const expired = now - token > expireTime;
    if (!expired || req.url === '/user/login' ||req.url === '/user/singup') {
      unauthorized = false;
      res.header('access-token', now);
    }
  }


  if (unauthorized) {
    res.sendStatus(401);
  } else {
    next();
  }
};