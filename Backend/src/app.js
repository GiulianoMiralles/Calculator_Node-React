const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 8000);              // - This is in case I have this active port in the cloud I take that same one, in addition to setting the port

const calculatorRoutes = require('../src/routes/calculator');


// Middlewares
app.use(morgan('dev'));                                 // - It allows me to see the request and the response time of the user
app.use(express.urlencoded({ extended: false }));       // - This allows my server to read data from a form
app.use(express.json());                                // - This allows my server to understand JSON formats 

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);

//Routes
app.use('/', calculatorRoutes);


//Starting the server
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
});