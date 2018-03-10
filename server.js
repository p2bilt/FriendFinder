// Dependencies
// =============================================================
// const cast = require('./app/routing/htmlroutes.js');
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// const app = require('./app/server.js');
const port = process.env.PORT || process.argv[2] || 8080;


// Sets up the Express App
// =============================================================
const app = express();


// needed so i can link to my css styles
// app.use(express.static(__dirname + '/app/public'));
app.use(express.static(path.join(__dirname, './app/public')));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//ROUTER
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

app.listen(port, function() {
	console.log("Tyrell Corp listening on PORT: " + port);
});

