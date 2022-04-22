const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const {v4}=require('uuid');
const { string } = require('joi');
const demoSchema=new mongoose.Schema({
    _id:{
        type:String,
        default:v4,
    },
    Name:{
        type:String,
        
    },
    Email:{
        type:String,
    },
    password:{
        type:String,
    },
})
demoSchema.plugin(toJSON);
demoSchema.plugin(paginate);


const demo = mongoose.model('demo', demoSchema);

module.exports = demo;