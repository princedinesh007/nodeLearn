const express = require('express');
const router = express.Router();
const democontroller=require('../../controllers/demo.controller')

router.route('/').post(democontroller.createdemo)


module.exports=router;