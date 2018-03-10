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

    	var matchName = "";
    	var matchImage = "";
    	var totalDiff = 10000;

    			// Examine all existing friends in the list
		for (var i = 0; i < friendData.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friendData[i].scores[j] - userResponses[j]);
			}
			// console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < totalDiff) {
				// console.log('Closest match found = ' + diff);
				// console.log('Friend name = ' + friends[i].name);
				// console.log('Friend image = ' + friends[i].photo);

				totalDiff = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}


        friendData.push(req.body);

        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

    });


    app.post('/api/clear', function(req, res) {

        // Empty out the arrays of data
        friendData = [];

        console.log(friendData);
    });



};
