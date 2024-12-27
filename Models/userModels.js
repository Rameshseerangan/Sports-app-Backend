import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token:{
        type:String
    },
    role:{
        type:String,
        enum:['Student','admin'],
        default:'Student'
    }
})
const User = mongoose.model('User', userSchema);
export default User;