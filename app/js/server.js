// server.js

  // set up ========================
  var express  = require('express');
  var app      = express();                 // create our app w/ express
  var mongoose = require('mongoose');           // mongoose for mongodb
  var morgan = require('morgan');       // log requests to the console (express4)
  var bodyParser = require('body-parser');  // pull information from HTML POST (express4)
  var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

  // configuration =================

  mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu');   // connect to mongoDB database on modulus.io

  app.use(express.static(__dirname + '/public'));         // set the static files location /public/img will be /img for users
  app.use(morgan('dev'));                     // log every request to the console
  app.use(bodyParser.urlencoded({'extended':'true'}));      // parse application/x-www-form-urlencoded
  app.use(bodyParser.json());                   // parse application/json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
  app.use(methodOverride());

// define model =================
//may need to be separated into specific schemas, not sure yet
  var Date = mongoose.model('Date', {
    name : String,
    place : String,
    day : String,
    stars : String,
    back : String
  });

// routes ======================================================================
// listen (start app with node server.js) ======================================
  // api ---------------------------------------------------------------------
  // get all todos
  app.get('/api/dates', function(req, res) {

    // use mongoose to get all todos in the database
    Date.find(function(err, dates) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err)

      res.json(dates); // return all todos in JSON format
    });
  });

  // create todo and send back all todos after creation
  app.post('/api/dates', function(req, res) {

    // create a todo, information comes from AJAX request from Angular
    Date.create({
      name : req.body.text,
      place : req.body.text,
      day : req.body.text,
      stars : req.body.text,
      back : req.body.text,
      done : false
    }, function(err, date) {
      if (err)
        res.send(err);

      // get and return all the todos after you create another
      Date.find(function(err, dates) {
        if (err)
          res.send(err)
        res.json(dates);
      });
    });

  });

  // delete a todo
  app.delete('/api/dates/:date_id', function(req, res) {
    Date.remove({
      _id : req.params.date_id
    }, function(err, date) {
      if (err)
        res.send(err);

      // get and return all the todos after you create another
      Date.find(function(err, dates) {
        if (err)
          res.send(err)
        res.json(dates);
      });
    });
  });
