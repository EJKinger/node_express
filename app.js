var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res){
  res.render('index', {list: ['a', 'b'], title: 'myApp'});
});

app.get('/books', function (req, res){
  res.send('Hello Books');
});

app.listen(port, function(err){
  console.log('running server on port ' + port);
});
