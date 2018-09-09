// Var values
var cors = require('cors');
var express = require('express');
var apiRouter=express.Router();

var app = express();
// Sets PORT
var port = process.env.PORT || 8080;

require('./app/routes')(app, {});



app
.use(cors())
 .use('/api', apiRouter)
 .listen(port, function() {
   console.log('API Magic happening on port ' + port);
 });
