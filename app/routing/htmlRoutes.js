
//Dependencies
var path = require('path');

// Routes
// =============================================================

module.exports = function(app){

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  // app.use(function (req, res) {
  //   res.sendFile(path.join(__dirname + '/../public/home.html'));
  // });

      app.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/all.html"));
});

  app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
};