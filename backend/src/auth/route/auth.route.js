const Router = require('koa-router')
const AuthController = require('../controller/auth.controller')
const router = new Router()

router.post('/create', AuthController.create)

module.exports = router


