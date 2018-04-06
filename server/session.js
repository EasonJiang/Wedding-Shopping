import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
const app = express();
app.use(cookieParser('user_session'));
app.use(session({
    secret:'user_session',
    resave:false,
    store: session_store, 
    saveUninitialized:true,
    cookie:{
        path:'/',
        secure:true,
        maxAge: 60 * 1000 * 30
    }
}))