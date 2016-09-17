

//this will require the information that we have store inside the friends.js
var friendsList = require ('../data/friends.js');

module.exports = function(app) {
	//API REQUEST
	//-------------------------------------
	//this route will display a JSON with all the information from all the posible friends
	app.get('/api/friends',function(req,res){
		res.json(friendsList);
	});

	//API POST
	//-------------------------------------
	//This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
	app.post('api/friends',function(req,res){
			if(friendslist.lenght < 6){
	 		friendsList.push(req.body);
	 		res.json(true);
	 	}

	 	else{
	 		friendsisLt.push(req.body);
	 		res.json(false)
	 	}
	 });

}
