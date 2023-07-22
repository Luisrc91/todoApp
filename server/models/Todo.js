import mongoose from "mongoose";

const {Schema} = mongoose;
const todoSchema = new Schema({
title:{
    type: 'string',
    required: true,
},
finished:{
    type: 'boolean',
    required: false,
    default: false,
},
user:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
}
}, {timestamps: true});

export default mongoose.model('todo', todoSchema);