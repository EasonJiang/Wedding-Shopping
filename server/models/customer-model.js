import mongoose from '../config/db';
mongoose.Promise = global.Promise;
const {Schema} = mongoose;
const customerInfoSchem = new Schema({
    type: {
        type: Number,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        minlength: [2, 'Username must be 5 characters or more.'],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'password must be 5 characters or more.'],
    },
    email: {
        type: String,
        required: true,
        minlength: [5, 'email must be 5 characters or more.'],
    },
    address: {
        type: String,
        required: false,
        minlength: [10, 'Username must be 5 characters or more.'],
    },
    phoneNumber: {
        type: String,
        required: false,
        minlength: [10, 'Username must be 5 characters or more.'],
    },
    memberId: {
        type: String,
        required: false,
        minlength: [10, 'Username must be 5 characters or more.'],
    },
});

const customerInfos = mongoose.model('customerInfos',customerInfoSchem);
export default customerInfos;
// moogoose.exports = customer;
