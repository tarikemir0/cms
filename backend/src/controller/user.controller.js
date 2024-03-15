const MongoConnection = require('../../common/database/mongo.database.connect')
const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../../config/config');

const secretKey = config.secretKey;

exports.create = async (ctx) => {
  try {
    const { username, password } = ctx.request.body;
    const newUser = new userModel({ username, password });
    const savedUser = await newUser.save();
    ctx.body = savedUser;
  } catch (error) {
    ctx.throw(500, 'Internal Server Error', error);
  }
};

exports.login = async (ctx) => {
  try {
    const { username, password } = ctx.request.body;
    const user = await User.findOne({ username });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      ctx.throw(401, 'Invalid username or password');
    }
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
    ctx.body = { token };
  } catch (error) {
    ctx.throw(500, 'Internal Server Error', error);
  }
};