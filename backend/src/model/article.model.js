const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    writer:{
        type: String,
        required: true 
    },    
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    image:{
        type: String
    }
})

const article = mongoose.model('article', articleSchema)

module.exports = article
    