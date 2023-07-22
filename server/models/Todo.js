import mongoose from "mongoose";

const {Schema} = mongoose;
const todoSchema = new Schema({
title:{
    type: String,
    required: true,
},
finished:{
    type: Boolean,
    required: false,
    default: false,
},
user:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
}
}, {timestamps: true});

export default mongoose.model('Todo', todoSchema);