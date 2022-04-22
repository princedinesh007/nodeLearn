const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { demoservice } = require('../services');

const createdemo=catchAsync(async(req,res)=>{
    const demo = await demoservice.createdemo(req.body)
    res.send(demo);
    await demo.save();
});

module.exports={createdemo}