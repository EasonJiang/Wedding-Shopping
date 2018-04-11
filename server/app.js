import express from 'express';
const path = require('path');
import bodyParser from 'body-parser';
import routes from './routes';
import proxy from 'http-proxy-middleware';
import './config/db';
import expressJwt from "express-jwt";
import jwks from  'jwks-rsa';

const app = express();

//set the JWT
const jwtCheck = expressJwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://leichen.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://127.0.0.1:3002',
    issuer: "https://leichen.auth0.com/",
    algorithms: ['RS256']
}).unless({path: ["/user/login","/user/singup"]});
app.use(jwtCheck);

app.use(require('./utils/auth'));
// app.use(server);
app.use(bodyParser.json());
app.use('/user/',routes.usersRoutes);

export default app;
