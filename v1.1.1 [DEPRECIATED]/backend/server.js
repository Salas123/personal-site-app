const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;


mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true});
const connection = mongoose.connection;

connection.once('open', () =>{
    console.log("MongoDB database connection established successfully!")
})

const formRouter = require('./routes/formSubmission');

app.use('/', formRouter);


app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
});