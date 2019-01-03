var mongoose = require('mongoose');

var equipment = new mongoose.Schema({
  tshirt:{type:String},
  socks:{type:String},
  helmet:{type:String},
});

module.exports = equipment;