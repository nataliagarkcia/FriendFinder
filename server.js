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


// require('../routing/api-routes.js')(app);
// require('../routing/html-route.js')(app);

	app.get('/home', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	//if doesn't have a match will return home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

require(__dirname + '/app/routing/api-routes.js')(app);
//require(__dirname + '/app/routing/html-route.js')(app);

//this code will start our server

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});