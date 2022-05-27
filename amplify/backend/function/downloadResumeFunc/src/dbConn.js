const {MongoClient} = require('mongodb');

const clientPromise = new MongoClient(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const client = clientPromise.connect();
module.exports.getUrlHandler = async function(event, context){


    const clientConn = await client;

    const db = clientConn.db(process.env.MAIN_DB);

    const results = await db.collection(process.env.COLLECTION).find({resume_version: 'v1.0.0'}).toArray();

    if(!results)
        return 'File does not exist anymore';

    return results[0].resume_url;


}
