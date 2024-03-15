const Router = require('koa-router')
const userController = require('../controller/user.controller')
const router = new Router()

router.post('singup', userController.create)
router.post('signin', userController.login)

module.exports = router