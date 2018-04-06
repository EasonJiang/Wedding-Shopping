import mongoose from 'mongoose';
const db = mongoose;
const db_url = 'mongodb://127.0.0.1:27017/Wedding'
mongoose.Promise = global.Promise;
db.connect(db_url,()=> console.log("connected to the mongoDB...."));

/**
 * MongoDB connected sucessful
 */
db.connection.on('connected',()=> console.log('Mongoose connection open to ' + db_url));

/**
 * MongoDB connected error
 */
db.connection.on('error', (err)=> console.log('Mongoose connection error: ' + err));

/**
 * MongoDB connection break
 */
db.connection.on('disconnected', ()=> console.log('Mongoose connection is break '));
export default db;