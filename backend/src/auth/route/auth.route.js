const Router = require('koa-router')
const AuthController = require('../controller/auth.controller')
const router = new Router()

router.post('/create', AuthController.create)
router.get('/findAll', AuthController.findAll)
router.get('/findOne/:id', AuthController.findOne)
router.delete('/deleteOne/:id', AuthController.deleteOne)
router.patch("/updateOne/:id", AuthController.updateOne);

module.exports = router


