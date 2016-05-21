var express = require('express');
var app = express();

var myPort = 8081;

var dir =  process.cwd();
console.log('PWDirectory...' + dir);
app.use('/current', express.static(dir + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World from Node Express!' + app.get('port'));
});


app.listen(myPort, function () {
  console.log('Example app listening on port...' + app.get('port'));
  console.log('Directory...' + __dirname);
});

console.log("Working directory - " + __dirname);
app.set('port', process.env.PORT || myPort);
app.use('/public', express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
