var express = require('express');
var app = express();
var path = require('path')
var fs = require('fs');
// var bodyParser = require('body-parser');

// var ACTIVITIES_FILE = path.join(__dirname, 'data.json');

// app.get('/api/data', function (req, res) {
//   fs.readfile(ACTIVITIES_FILE, function(err, data){
//     if (err) {
//       console.log(err);
//       process.exit(1);
//     }
//     res.json(JSON.parse(data));
//   })
// });

app.use(express.static('client/build'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})


var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
