const httpStatus = require('http-status');
const { demo } = require('../models');
const ApiError = require('../utils/ApiError');


const createdemo=async(demobody)=>{
    return demo.create(demobody)
}



module.exports={createdemo}