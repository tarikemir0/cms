const { error } = require('console');
const Koa = require('koa')
const bodyParser = require('koa-parser');
const cors = require('@koa/cors');
const articleRouter = require('./src/route/article.route')
const userRouter = require('./src/route/user.route')
require('dotenv').config({path: './config/local.env'})
const app = new Koa()

//middleware
app.use(bodyParser())
app.use(cors());
app.use(articleRouter.routes())
app.use(userRouter.routes())

// app.use((context) =>{
//     context.body = "koa back-end"
// })

// app.use((context) => {
//     context.body = "Welcome to Koa backend"
// })

app.on('error', (error)=>{
    throw error
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server started on PORT ${process.env.PORT}`)
})