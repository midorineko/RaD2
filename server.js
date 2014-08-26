// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database
var Date = require('./app/models/date')
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (uncomment after you enter in your own credentials in config/db.js)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

//
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();        // get an instance of the express Router

// // middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to Dates api!' });
});

//can write routes here if necessary
// router.get('/dates', function(req, res) {
//   res.json({ message: 'hooray! welcome to Dates api!' });
// });
// more routes for our API will happen here


// on routes that end in /dates
// ----------------------------------------------------
router.route('/dates')

  // create a date (accessed at POST http://localhost:8080/api/dates)
  .post(function(req, res) {

    var date = new Date();    // create a new instance of the date model
    date.name = req.body.name,
    date.place = req.body.place,
    date.day = req.body.day,
    date.stars = req.body.stars,
    date.back = req.body.back;

    // save the bear and check for errors
    date.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Date created!' });
    });

  })

  // get all the date >chained to post< (accessed at GET http://localhost:8080/api/bears)
  .get(function(req, res) {
    Date.find(function(err, dates) {
      if (err)
        res.send(err);

      res.json(dates);
    });
  });



  //specific date routes
  router.route('/dates/:date_id')

  // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
  .get(function(req, res) {
    Date.findById(req.params.date_id, function(err, date) {
      if (err)
        res.send(err);
      res.json(date);
    });
  });

    // // use our date model to find the date we want
    // remember to remove the semi colin if you want to use this
  // .put(function(req, res) {

    // Date.findById(req.params.date_id, function(err, date) {

    //   if (err)
    //     res.send(err);

    //   date.name = req.body.name;  // update the bears info

    //   // save the date
    //   date.save(function(err) {
    //     if (err)
    //       res.send(err);

    //     res.json({ message: 'Date updated!' });
    //   });

    // });
  // });

//this is delete, remember remove the semi colin
// .delete(function(req, res) {
//     Date.remove({
//       _id: req.params.date_id
//     }, function(err, date) {
//       if (err)
//         res.send(err);

//       res.json({ message: 'Successfully deleted' });
//     });
//   });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);



app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
app.listen(port);                   // startup our app at http://localhost:8080
console.log('Magic happens on port ' + port);       // shoutout to the user
exports = module.exports = app;             // expose app
