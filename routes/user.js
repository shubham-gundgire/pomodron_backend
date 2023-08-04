const router = require("express").Router();
const {getdata} = require('../controller/user');
const {verifyuser} = require('../middleware/auth');


router.get('/getUser',verifyuser,getdata);

module.exports = router;