const mongoose = require('mongoose');
const connection = "mongodb+srv://scheduler_user_001:2VTJ8dAIwG6Bg4rJ@schedulecluster.3vcnp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


    mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
        .then(() => console.log("Database Connected Successfully"))
        .catch(err => console.log(err));