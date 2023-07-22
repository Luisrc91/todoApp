import mongoose from "mongoose";

const {Schema} = mongoose;
const userSchema = new Schema({
name:{
    type: String,
    required: true,
},
email:{
    type: String,
    required: false,
    default: false,
},
password:{
    type: String,
    ref: 'User',
    require: true,
}
}, {timestamps: true});

export default mongoose.model('User', userSchema);