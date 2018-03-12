// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friendData = require('../data/friends.js');

// Export API routes
module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });

    app.post('/api/friends', function(req, res) {

    	var userInput = req.body;
    	var userResponses = userInput.scores;
    	var userName = userInput.name;
    	var userPhoto = userInput.photo;


    	var matchName = "";
    	var matchImage = "";
    	var totalDiff = 10000;

    			// Examine all existing friends in the list
		for (var i = 0; i < friendData.length; i++) {
			console.log('friend = ' + JSON.stringify(friendData[i]));

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friendData[i].scores[j] - userResponses[j]);
			}
			console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < totalDiff) {
				console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friendData[i].name);
				// console.log('Friend image = ' + friendData[i].photo);

				totalDiff = diff;
				matchName = friendData[i].name;
				matchImage = friendData[i].photo;
			}
		}
		    	console.log("Match: " + matchName +" img: "+ matchImage);

        friendData.push(userInput);

        res.json({status: 'OK', matchName: matchName, matchImage: matchImage, userPhoto: userPhoto, userName: userName});

    });


    app.post('/api/clear', function(req, res) {

        // Empty out the arrays of data
        friendData = [];

        console.log(friendData);
    });



};
