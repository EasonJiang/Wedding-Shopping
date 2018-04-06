import express from 'express';
import customerContoller from '../controllers/customer-controller'
const usersRoutes = express();

usersRoutes.get('/',customerContoller.customerSession)
usersRoutes.post('/login',customerContoller.login)
usersRoutes.post('/signup',customerContoller.singUp);
export default usersRoutes;