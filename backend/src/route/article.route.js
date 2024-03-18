const Router = require('koa-router')
const articleController = require('../controller/article.controller')
const router = new Router()

router.post('/article/create', articleController.create)
router.get('/article/findAll', articleController.findAll)
router.get('/article/findOne/:id', articleController.findOne)
router.delete('/article/deleteOne/:id', articleController.deleteOne)
router.patch('/article/updateOne/:id', articleController.updateOne)

module.exports = router


