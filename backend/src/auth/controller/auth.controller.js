const MongoConnection = require('../../../common/database/mongo.database.connect')
const AuthModel = require('../model/auth.model')

module.exports = {
    async create(context){
        try{
            const authItem = new AuthModel(context.request.body)
            const result = await authItem.save()
            context.body = result
            //context.body = "first route"
        }catch(err){
            context.throw(500, "Internal server Error", err)
        }
    },

    async findAll(context){
        try {
            const result = await AuthModel.find()
            context.body = result
            
        } catch (error) {
            context.throw(500, "internal server error", error)
        }
    },

    async findOne(context){
        try {
            const result = await AuthModel.findById({
                _id: context.request.params.id
            })
            context.body = result
        } catch (error) {
            context.throw(500, "internal server error", error)
        }
    },

    async deleteOne(context) {
        try {
            const result = await AuthModel.findByIdAndDelete({
                _id: context.request.params.id,
            });
            context.body = result;
        } catch (err) {
            context.throw(500, "Internal Server Error", err);
        }
    },

    async updateOne(context) {
        try {
            const result = await AuthModel.findByIdAndUpdate({ _id: context.request.params.id },
                context.request.body
            );
            const resultAfterUpdate = await AuthModel.findById({
                _id: context.request.params.id,
            });
            context.body = resultAfterUpdate;
        } catch (err) {
            context.throw(500, "Internal Server Error", err);
        }
    },

}