const { error } = require('console');
const Koa = require('koa')
const bodyParser = require('koa-parser');
const router = require('./src/auth/route/auth.route')
require("dotenv").config({path: "./config/local.env"})
const app = new Koa()

//middleware
app.use(bodyParser())

app.use(router.routes())

// app.use((context) =>{
//     context.body = "koa back-end"
// })

// app.use((context) => {
//     context.body = "Welcome to Koa backend"
// })

app.on("error", (error)=>{
    throw error
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server started on PORT ${process.env.PORT}`)
})