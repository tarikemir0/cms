module.exports = {
    async create(context){
        try{
            context.body = context.request.body
            //context.body = "first route"
        }catch(err){
            context.throw(500, "Internal server Error", err)
        }
    }
}