//we need to require path to be able to create the routes
var path = require('path');


module.exports = function(app){

	//this will require the information input in the browser and take the user to the desired html as a reponse
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

}