var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DateSchema   = new Schema({
  place: String,
  people: Number,
  date: Date,
  time: String,
  star: Number,
  back: Boolean
});

module.exports = mongoose.model('Date', DateSchema);
