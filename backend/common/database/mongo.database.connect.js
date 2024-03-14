const mongoose = require('mongoose')

async function connectMongo(){

    try {
        // await mongoose.connect('mongodb://127.0.0.1:27017/trt-world-db', {
        //     userNewUrlParser: true,
        //     useUnifiedTopology: true,
        // })

        await mongoose.connect('mongodb+srv://egemen:12345@trt-world-db.ayuglka.mongodb.net/?retryWrites=true&w=majority&appName=trt-world-db')

        const db = await mongoose.connection
        console.log("db connection successful")
        return db        
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectMongo()