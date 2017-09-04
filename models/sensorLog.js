var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;

var schema = new Schema({
    createdDate: {type: Date, default: Date.now},
    sensorId: String,
    roll: Number,
    pitch: Number,
    heading: Number
});

module.exports = mongoose.model('SensorLog', schema);