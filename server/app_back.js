import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bodyParser from 'body-parser';
import routes from './routes';
import './config/db';


/**
 * save the session into database
 */
// var mongoose = require('mongoose'),
//     dbUrl ='mongodb://@localhost:27017/Wedding',
//     MongoStore = require('connect-mongo')(session);
console.log('&&&&&&&&&&&&&&&&&&&0000');
const app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:80");
    res.header("Access-Control-Allow-Headers", "*"); 
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",'3.2.1');
    res.header("Access-Control-Allow-Credentials",true)
    next();
});


// app.set('trust proxy', 1) // trust first proxy
//use Middlleware

// var sessionOptions = {
//     key: 'session.sid',
//     secret: 'atomicbomb',
//     resave: false,
//     proxy: true,
//     saveUninitialized: true,
//     store: new MongoStore({ 
//         url: dbUrl,
//         ttl: 14 * 24 * 60 * 60 // = 14 days. Default
//       }),
//     cookie: {
//       secure: false,
//       maxAge: 600000
//     }
//   };
// app.use(session(sessionOptions));

app.use(bodyParser.json());
app.use('/api/user/',routes.usersRoutes);

export default app;
