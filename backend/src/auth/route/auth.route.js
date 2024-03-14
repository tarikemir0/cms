const Router = require('koa-router')
const AuthController = require('../controller/auth.controller')
const router = new Router()

router.post('/auth/create', AuthController.create)
router.get('/auth/findAll', AuthController.findAll)
router.get('/auth/findOne/:id', AuthController.findOne)
router.delete('/auth/deleteOne/:id', AuthController.deleteOne)
router.patch('/auth/updateOne/:id', AuthController.updateOne);

module.exports = router


