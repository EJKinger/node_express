var express = require('express');
var bookRouter = express.Router();

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
  bookRouter.route('/')
    .get(function (req, res){
      res.render('bookListView', { 
        nav: nav,
        title: 'Books',
        books: books
      });
    }
  );

  bookRouter.route('/:id')
    .get(function (req, res){
      var id = req.params.id;
      res.render('bookView', { 
        nav: nav,
        title: 'Books',
        book: books[id]
      });
    }
  );

  return bookRouter;
};



module.exports = router;
