// Basic 
const  express = require('express');
const  router = require('./src/routes/api');
const  app = new express();
const bodyParser = require('body-parser');


// Security Middleware Declare
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Database Import 
const mongoose = require('mongoose');

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(bodyParser.json());

//Request Rate Limit
const limiter = rateLimit({windowMs:15*60*100, max:3000});
app.use(limiter);

// DB Connection 
const uri = "mongodb://127.0.0.1:27017/Todo";
const option = {user:'', pass:'', autoIndex:true};
mongoose.connect(uri, option, (error) => {
    console.log('Connection Success');
    console.log(error);
})


//Routing Implement
app.use('/api/v1', router);


// If Undefined Route Implement
app.use("*", (req,res) => {
    res.status(404).json({status:"failed",data:"URL not Found"})
});

module.exports = app;

