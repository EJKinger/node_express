var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
  {
    title: 'War and Peace',
    author: 'Lev Nikolayevich Tolstoy'
  },
  {
    title: 'Les Miserables',
    author: 'Victor Hugo'
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelly'
  },
  {
    title: 'The Power Broker',
    author: 'Robert Caro'
  }
];

var router = function(nav){
  adminRouter.route('/addBooks')
    .get(function(req, res){

      var url = 'mongodb://localhost:27017/libraryApp';
      mongodb.connect(url, function(err, db){
        var collection = db.collection('books');
        collection.insertMany(books, function(err, results){
          res.send(results);
          db.close();
        });
      });
    });
  return adminRouter;
};

module.exports = router;
