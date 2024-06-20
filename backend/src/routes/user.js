const express = require('express');

const router = express.Router();
const UserController = require('../controllers/users');
const verifyToken = require('../middlewears/verifyToken')

router.post('/', UserController.register)
router.post('/login', UserController.login)
router.put('/update',verifyToken, UserController.updateUser)
router.get('/',verifyToken, UserController.getUserData)
router.delete('/',verifyToken, UserController.deleteAccount)
module.exports = router;