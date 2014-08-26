var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DateSchema   = new Schema({
  name: String,
  place: String,
  day: String,
  stars: String,
  back: String
});

module.exports = mongoose.model('Date', DateSchema);
