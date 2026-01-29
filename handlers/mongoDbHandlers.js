const mongoDb = require("mongoose")

async function connectToMongoDB() {
    try{
        await mongoDb.connect(process.env.MongoDb)
        console.log("Connected to MongoDB on Database:", mongoDb.connection.name)
    }catch(err){
        console.log("ERROR on MongoDbHandler:", err)
    }
}

module.exports = {connectToMongoDB}