var mongoose = require('mongoose'),
      equipment = require('./equipment');

var newUsr = new mongoose.Schema({
  name:{type:String},
  id:{type:String},
  status:{type:String},
  equipment:[equipment]
  });

var newUsr = mongoose.model('newUsr',newUsr);

module.exports = newUsr;
