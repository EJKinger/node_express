var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res){
  res.send('Hello World');
});

app.get('/books', function (req, res){
  res.send('Hello Books');
});

app.listen(port, function(err){
  console.log('running server on port ' + port);
});



function getPonyAllergies (ponies, ownerEmail) {
  // Write your code here, and
  // return your final answer.
  var userPonies = ponies.filter(function(pony){
    return pony.email === ownerEmail;
  });
  var allUserAllergies = Array.prototype.concatAll(
    userPonies.map(function(pony){
      return pony.allergies;
    })
  );
  return arr.allUserAllergies(function(a, b){
    return a[0] > b[0];
  });
}