import express from 'express';
const path = require('path');
// import cookieParser from 'cookie-parser';
// import session from 'express-session';
import bodyParser from 'body-parser';
import routes from './routes';
import proxy from 'http-proxy-middleware';
import './config/db';
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
console.log('router',router);
console.log('__dirname',__dirname);
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

const app = express();

//  var sessionOptions = {
//         key: 'session.sid',
//         secret: 'atomicbomb',
//         resave: false,
//         proxy: true,
//         saveUninitialized: true,
//         cookie: {
//           secure: false,
//           maxAge: 600000
//         }
//       };
// app.use(session(sessionOptions));

//context可以是单个字符串，也可以是多个字符串数组，分别对应你需要代理的api,星号（*）表示匹配当前路径下面的所有api
// const context = [`/api/*`, `/admin/*`]

//options可选的配置参数请自行看readme.md文档，通常只需要配置target，也就是你的api所属的域名。
// const options = {
//     target: 'http://www.caonimabide.com',
//     changeOrigin: true
// }

//将options对象用proxy封装起来，作为参数传递
// const apiProxy = proxy(options)

//现在你只需要执行这一行代码，当你访问需要跨域的api资源时，就可以成功访问到了。
// app.use(context, apiProxy)
/**
 * save the session into database
 */

server.use(require('./utils/auth'));
app.use(server);
app.use(bodyParser.json());
app.use('/user/',routes.usersRoutes);

export default app;
