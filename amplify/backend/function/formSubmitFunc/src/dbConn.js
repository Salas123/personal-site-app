const {MongoClient} = require('mongodb');

const ClientPromise = new MongoClient(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const client = ClientPromise.connect();
module.exports.postQueryToDB = async function(event, context, form){


    const clientConn = await client;

    const db = clientConn.db(process.env.MAIN_DB);

    const results = await db.collection(process.env.COLLECTION).insertOne(form);

    return results.acknowledged;


}

