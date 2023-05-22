const express = require('express')
const router = express.Router()
path=require('path')
const {chat} =require("../controller/controller")

router.get('/',chat)


module.exports = router;