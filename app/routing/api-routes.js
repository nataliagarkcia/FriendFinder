

//this will require the information that we have store inside the friends.js
var friendsList = require ('../data/friends.js');

module.exports = function(app) {
	//API REQUEST
	//-------------------------------------
	//this route will display a JSON with all the information from all the posible friends
	app.get('/api/friends',function(req,res){
		res.send(friendsList);
	});

	//API POST
	//-------------------------------------
	//This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
	app.post('/api/friends',function(req,res){

		// It will host the new friend information from req.body in a var
		var newFriend = req.body;
		//and it will push that new friend into the friendas list
		friendsList.push(newFriend);

		//to start total difference will be 0
		var totalDifference = 0;

		//this var will ontain the the differences between both users
		var differencesArray = [];
		
		//Loop through friends, minus one (current user)
		for (var i = 0; i < (friendsList.length - 1); i++){
			
			//Loop through the question values
			for (var j = 0; j < friendsList[i].scores.length; j++){
				totalDifference += Math.abs(friendsList[i].scores[j] - newFriend.scores[j]);
			}

			differencesArray.push(totalDifference);
			totalDifference = 0;
		}

		//Give the smallest value in the array
		var bestMatch = friendsList[differencesArray.indexOf(Math.min.apply(null, differencesArray))];

		res.send(bestMatch);

		});
}