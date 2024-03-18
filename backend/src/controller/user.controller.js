const MongoConnection = require('../../common/database/mongo.database.connect')
const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../../config/config');

const secretKey = config.secretKey;

module.exports = {

    async create(context) {
        try {
            const {username, password} = context.request.body;
            const newUser = new userModel({username, password});
            const savedUser = await newUser.save();
            context.body = savedUser;
        } catch (error) {
            context.throw(500, 'Internal Server Error', error);
        }
    },

    async login(context) {
        try {
            const {username, password} = context.request.body;
            const user = await User.findOne({username});
            if (!user || !bcrypt.compareSync(password, user.password)) {
                context.throw(401, 'Invalid username or password');
            }
            const token = jwt.sign({id: user._id}, secretKey, {expiresIn: '1h'});
            context.body = {token};
        } catch (error) {
            context.throw(500, 'Internal Server Error', error);
        }
    }
}

