var express = require('express');

//creat our app
var app = express();
const PORT = process.env.PORT || 3000;

// turn traffic from https -> https
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    console.log('req.hostname: '+ req.hostname + 'req.url: ' + req.url);
    res.redirect('http://' + req.hostname + req.url);

  } else {
    // redirect if not http
    next();
  }
});

//folder to serve
app.use(express.static('public'));

//start the server
app.listen(PORT, function () {
  console.log('Express server has started on port ' + PORT)
});
