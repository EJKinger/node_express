var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;

var router = function(nav){
  bookRouter.route('/')
    .get(function (req, res){
      var url = 'mongodb://localhost:27017/libraryApp';
      mongodb.connect(url, function(err, db){
        var collection = db.collection('books');
        collection.find({}).toArray(function(err, results){
          res.render('bookListView', { 
            nav: nav,
            title: 'Books',
            books: results
          });
        });
      });
    }
  );

  bookRouter.route('/:id')
    .get(function (req, res){
      var id = new objectID(req.params.id);
      var url = 'mongodb://localhost:27017/libraryApp';
      mongodb.connect(url, function(err, db){
        var collection = db.collection('books');
        collection.findOne({_id: id}, function(err, results){
          res.render('bookView', { 
            nav: nav,
            title: 'Books',
            book: results
          });
        });
      });

      // var id = req.params.id;
      // res.render('bookView', { 
      //   nav: nav,
      //   title: 'Books',
      //   book: books[id]
      // });
    }
  );

  return bookRouter;
};



module.exports = router;
