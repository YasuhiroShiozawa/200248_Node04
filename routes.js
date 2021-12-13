const express = require('express')

const homeController = require('./controllers/HomeController');
const loginController = require('./controllers/LoginController');
const itemController = require('./controllers/ItemController');

const router = express.Router()

// homeController
router.get('/', homeController.index)
router.get('/profile', homeController.profile)
// loginController
router.get('/login', loginController.index)
router.post('/auth', loginController.auth)
// itemController
router.get('/item', itemController.index)
router.get('/item/:id', itemController.show)

module.exports = router