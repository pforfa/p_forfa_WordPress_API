var express = require('express');

//process.env.PORT - Uses default port variable on the server you upload on.
var app = express();
const PORT = process.env.PORT || 3000;

//Needed to make localhost work for testing, and Heroku deployment.
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
