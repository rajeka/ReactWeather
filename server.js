var express = require('express');

//creat our app
var app = express();
//folder to serve
app.use(express.static('public'));

//start the server
app.listen(3000, function () {
  console.log('Express server has started on port 3000')
});
