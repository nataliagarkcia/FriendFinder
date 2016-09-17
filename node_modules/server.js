//Dependencies to use for this app

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express(); // Tells node that we are creating an "express" server, also we create a variable that will be call app and will have the express dependencie as a value
var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener

//body parser helps the server to interpreter data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//this will call the routes creates in other files


require('../routing/api-routes.js')(app);
require('../routing/html-route.js')(app);

//this code will start our server

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});