var express = require('express');
var router = express.Router();
var userController = require('../controller/user');

/* GET users listing. */
router.get('/', userController.homePage);
router.post('/adduser', userController.addUser);
router.get('/checkusername/:username', userController.checkUserName);
router.get('/checkemail/:email', userController.checkEmail);

module.exports = router;
